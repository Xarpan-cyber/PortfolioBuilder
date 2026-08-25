const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const https = require('https');
const auth = require('../middleware/auth');
const Portfolio = require('../models/Portfolio');
const User = require('../models/User');

// Configure local uploads directory fallback
const uploadDir = path.join(__dirname, '../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer storage engine configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

// File filter (images and PDF/docs)
const fileFilter = (req, file, cb) => {
  const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.pdf', '.doc', '.docx'];
  const ext = path.extname(file.originalname).toLowerCase();
  if (allowedExtensions.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and documents (PDF, Word) are allowed.'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Helper function to upload to ImageKit if keys are present
const uploadToImageKit = (filePath, fileName) => {
  return new Promise((resolve, reject) => {
    const pubKey = process.env.IMAGEKIT_PUBLIC_KEY;
    const privKey = process.env.IMAGEKIT_PRIVATE_KEY;
    const endpoint = process.env.IMAGEKIT_URL_ENDPOINT;

    if (!pubKey || !privKey || !endpoint) {
      // Missing keys: resolve with null to trigger local fallback
      return resolve(null);
    }

    try {
      const fileBuffer = fs.readFileSync(filePath);
      const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
      
      const options = {
        method: 'POST',
        hostname: 'upload.imagekit.io',
        path: '/api/v1/files/upload',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(privKey + ':').toString('base64'),
          'Content-Type': `multipart/form-data; boundary=${boundary}`
        }
      };

      const req = https.request(options, (res) => {
        let chunks = [];
        res.on("data", (chunk) => chunks.push(chunk));
        res.on("end", () => {
          const body = Buffer.concat(chunks).toString();
          if (res.statusCode >= 200 && res.statusCode < 300) {
            const data = JSON.parse(body);
            resolve(data.url);
          } else {
            console.error('ImageKit API Error Response:', body);
            resolve(null); // Fallback to local URL
          }
        });
      });

      req.on('error', (err) => {
        console.error('ImageKit Request Error:', err);
        resolve(null); // Fallback to local URL
      });

      // Write form-data parts
      req.write(`--${boundary}\r\n`);
      req.write(`Content-Disposition: form-data; name="file"; filename="${fileName}"\r\n\r\n`);
      req.write(fileBuffer);
      req.write(`\r\n--${boundary}\r\n`);
      req.write(`Content-Disposition: form-data; name="fileName"\r\n\r\n${fileName}\r\n`);
      req.write(`--${boundary}--\r\n`);
      req.end();

    } catch (err) {
      console.error('ImageKit integration error:', err);
      resolve(null);
    }
  });
};

// @route   GET api/portfolios
// @desc    Get all portfolios of logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const portfolios = await Portfolio.find({ user: req.user.id }).sort({ updatedAt: -1 });
    res.json(portfolios);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/portfolios
// @desc    Create a portfolio
// @access  Private
router.post('/', auth, async (req, res) => {
  const { title, slug } = req.body;

  try {
    if (!title || !slug) {
      return res.status(400).json({ message: 'Title and Slug are required' });
    }

    // Sanitize slug
    const sanitizedSlug = slug.toLowerCase()
      .trim()
      .replace(/[^a-z0-9-_]/g, '-')
      .replace(/-+/g, '-');

    if (sanitizedSlug.length < 3) {
      return res.status(400).json({ message: 'Slug must be at least 3 alphanumeric characters' });
    }

    // Check if slug is already taken
    const existing = await Portfolio.findOne({ slug: sanitizedSlug });
    if (existing) {
      return res.status(400).json({ message: 'URL slug is already taken. Please choose another one.' });
    }

    const portfolioData = {
      user: req.user.id,
      slug: sanitizedSlug,
      title: title
    };

    const fieldsToUpdate = [
      'template', 'onboarding', 'profile',
      'education', 'experience', 'skills', 'projects', 'services',
      'testimonials', 'blog', 'socials', 'contactEmail', 'appearance',
      'domain', 'analytics', 'settings'
    ];

    fieldsToUpdate.forEach(field => {
      if (req.body[field] !== undefined) {
        portfolioData[field] = req.body[field];
      }
    });

    const newPortfolio = new Portfolio(portfolioData);

    const portfolio = await newPortfolio.save();

    // Link portfolio to user
    await User.findByIdAndUpdate(req.user.id, {
      $push: { portfolios: portfolio._id }
    });

    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET api/portfolios/:id
// @desc    Get portfolio by ID
// @access  Private
router.get('/:id', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Verify ownership
    if (portfolio.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to view this portfolio' });
    }

    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.status(500).send('Server error');
  }
});

// @route   PUT api/portfolios/:id
// @desc    Update a portfolio
// @access  Private
router.put('/:id', auth, async (req, res) => {
  try {
    let portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Verify ownership
    if (portfolio.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized to edit this portfolio' });
    }

    // Validate new slug uniqueness if it is being modified
    if (req.body.slug && req.body.slug.toLowerCase().trim() !== portfolio.slug) {
      const sanitizedSlug = req.body.slug.toLowerCase()
        .trim()
        .replace(/[^a-z0-9-_]/g, '-')
        .replace(/-+/g, '-');

      const existing = await Portfolio.findOne({ slug: sanitizedSlug });
      if (existing) {
        return res.status(400).json({ message: 'URL slug is already taken. Please choose another.' });
      }
      req.body.slug = sanitizedSlug;
    }

    // Standard field updates
    const fieldsToUpdate = [
      'title', 'slug', 'template', 'onboarding', 'profile',
      'education', 'experience', 'skills', 'projects', 'services',
      'testimonials', 'blog', 'socials', 'contactEmail', 'appearance',
      'domain', 'analytics', 'settings'
    ];

    fieldsToUpdate.forEach(field => {
      if (req.body[field] !== undefined) {
        portfolio[field] = req.body[field];
      }
    });

    const updatedPortfolio = await portfolio.save();
    res.json(updatedPortfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   DELETE api/portfolios/:id
// @desc    Delete portfolio
// @access  Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id);
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    // Verify ownership
    if (portfolio.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Not authorized' });
    }

    // Delete model
    await Portfolio.deleteOne({ _id: req.params.id });

    // Remove reference from User
    await User.findByIdAndUpdate(req.user.id, {
      $pull: { portfolios: req.params.id }
    });

    res.json({ message: 'Portfolio removed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/portfolios/upload
// @desc    Upload image/document file (fallback to ImageKit if keys present, else local serve)
// @access  Private
router.post('/upload', auth, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a file' });
    }

    const localPath = req.file.path;
    const originalName = req.file.originalname;

    // Try uploading to ImageKit
    const imageKitUrl = await uploadToImageKit(localPath, req.file.filename);

    if (imageKitUrl) {
      // If upload succeeded, delete local file and return ImageKit URL
      try {
        fs.unlinkSync(localPath);
      } catch (err) {
        console.error('Error removing temporary upload file:', err);
      }
      return res.json({ url: imageKitUrl });
    }

    // Local fallback: Return the relative server URL
    const relativeUrl = `/uploads/${req.file.filename}`;
    res.json({ url: relativeUrl });

  } catch (err) {
    console.error('File upload error:', err.message);
    res.status(500).json({ message: err.message || 'Server upload error' });
  }
});

module.exports = router;
