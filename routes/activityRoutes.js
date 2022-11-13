const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Activity = mongoose.model('activity');

module.exports = (app) => {
  app.post(
    '/api/mongodb/save/activity/savednews',
    requireLogin,
    async (req, res) => {
      const { trend_id } = req.body;
      const activity = await Activity.findOneAndUpdate(
        {
          _userId: req.user.id,
        },
        { $addToSet: { savedNews: trend_id } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      res.json(activity);
    }
  );

  app.get('/api/mongodb/get/acitivity', requireLogin, async (req, res) => {
    const activity = await Activity.find({
      _userId: req.user.id,
    });

    res.json(activity);
  });
};
