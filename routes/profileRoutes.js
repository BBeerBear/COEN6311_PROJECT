const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Profile = mongoose.model('profile');

module.exports = (app) => {
  app.post('/api/profile/update', requireLogin, async (req, res) => {
    const { country, catergories } = req.body;
    console.log(req.body);

    const profile = await Profile.findOneAndUpdate(
      {
        _userId: req.user.id,
      },
      { catergories: catergories, country: country },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    // console.log('activity', activity);
    res.json(profile);
  });
};
