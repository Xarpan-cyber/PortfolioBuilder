require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/portfolios', require('./routes/portfolio'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/public', require('./routes/public'));

// Serve static frontend
const frontendPath = path.join(process.cwd(), 'frontend');
app.use(express.static(frontendPath));

// Serve local uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Fallback route for frontend
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

// Local development
const PORT = process.env.PORT || 5000;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log('MongoDB connected successfully');
}

// Only start app.listen when running locally
if (require.main === module) {
  connectDB()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error('MongoDB connection error:', err);
    });
}

module.exports = { app, connectDB };