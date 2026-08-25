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
app.use('/api/portfolios', require('./routes/portfolio'));; // Added back for backwards compatibility with frontend
app.use('/api/projects', require('./routes/projects'));
app.use('/api/skills', require('./routes/skills'));
app.use('/api/public', require('./routes/public'));

// Serve static frontend
const frontendPath = path.join(__dirname, '../frontend');
app.use(express.static(frontendPath));

// Serve local uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Fallback route for SPA
app.use((req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});

const PORT = process.env.PORT || 5000;

// DB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected successfully');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('MongoDB connection error:', err);
});
