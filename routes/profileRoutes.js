const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Profile = mongoose.model('profile');

module.exports = (app) => {
  app.post('/api/profile/update', requireLogin, async (req, res) => {
    const { googleId, facebookId, geo, preferredCategories } = req.body;
    let profile;
    try {
      if (googleId) {
        profile = await Profile().findOne({ googleId: googleId });
      } else {
        profile = await Profile().findOne({ facebookId: facebookId });
      }
      profile.overwrite({ geo: geo, preferredCategories: preferredCategories });
      await profile.save();
      console.log(profile);
      return res.json(profile);
    } catch (error) {
      console.error(err.message);
      return res.status(500).send('Server Error');
    }
  });
};
