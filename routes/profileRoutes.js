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
    const profile = await Profile.findOne({
      _userId: req.user.id,
    });
    res.json(profile);
  });

  // get profile of other users
  app.post('/api/profile/others', requireLogin, async (req, res) => {
    const profiles = await Profile.find();
    res.json(profiles);
  });

  //get profile by user id, some wrong
  app.get('/api/profile/:user_id', async ({ params: { user_id } }, res) => {
    const profile = await Profile.findOne({
      _userId: user_id,
    });
    return res.json(profile);
  });
};
