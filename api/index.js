const { app, connectDB } = require('../backend/server');

// Initialize database connection
connectDB().catch(console.error);

module.exports = app;
