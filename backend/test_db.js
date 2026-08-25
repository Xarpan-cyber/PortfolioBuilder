/*const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB.");
    const User = require('./models/User');
    const users = await User.find({});
    console.log("Users in DB:", users);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
*/