const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Profile = mongoose.model('profile');

module.exports = (app) => {
  app.post('/api/profile/update', requireLogin, async (req, res) => {
    const { country, preferredCategories } = req.body;
    console.log(preferredCategories);

    const profile = await Profile.findOneAndUpdate(
      {
        _userId: req.user.id,
      },
      {
        $set: { preferredCategories: preferredCategories, country: country },
      },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    res.json(profile);
  });

  app.get('/api/profile/me', requireLogin, async (req, res) => {
    const profile = await Profile.find({
      _userId: req.user.id,
    });
    res.json(profile);
  });
};
