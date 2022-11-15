const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/user/others', requireLogin, async (req, res) => {
    const users = await User.find();
    res.json(users);
  });
};
