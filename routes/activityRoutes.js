const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Activity = mongoose.model('activity');

module.exports = (app) => {
  app.post(
    '/api/mongodb/save/activity/savednews',
    requireLogin,
    async (req, res) => {
      const { trend_id } = req.body;
      console.log(typeof trend_id);
      console.log(req.user.id);
      const activity = await Activity.findOneAndUpdate(
        {
          _userId: req.user.id,
        },
        { $addToSet: { savedNews: trend_id } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      console.log(activity);
      //   const activity = Activity.findOne({
      //     _userId: req.user.id,
      //   });
      //   res.json(activity);
    }
  );
};
