const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Portfolio = require('../models/Portfolio');

// @route   GET api/projects
// @desc    Get all projects for a user's portfolio
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    res.json(portfolio.projects || []);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/projects
// @desc    Add a project to portfolio
// @access  Private
router.post('/', auth, async (req, res) => {
  try {
    const portfolio = await Portfolio.findOne({ user: req.user.id });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }
    
    // Add new project
    portfolio.projects.push(req.body);
    await portfolio.save();
    
    res.json(portfolio.projects);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
