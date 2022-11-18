const mongoose = require('mongoose');
const requireLogin = require('../middleware/requireLogin');
const User = mongoose.model('users');

module.exports = (app) => {
  app.get('/api/user/others', requireLogin, async (req, res) => {
    const users = await User.find();
    res.json(users);
  });

  app.get('/api/user/:user_id', async ({ params: { user_id } }, res) => {
    const user = await User.findOne({
      _id: user_id,
    });
    return res.json(user);
  });
};
