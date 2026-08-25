const express = require('express');
const router = express.Router();
const Portfolio = require('../models/Portfolio');

// @route   GET api/public/:slug
// @desc    Get public portfolio details by slug
// @access  Public
router.get('/:slug', async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ slug: req.params.slug.toLowerCase().trim() });
    
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    res.json(portfolio);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
