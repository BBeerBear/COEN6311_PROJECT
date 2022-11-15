const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const Activity = mongoose.model('activity');

module.exports = (app) => {
  //add saved news and return activity
  app.post(
    '/api/mongodb/save/activity/savednews',
    requireLogin,
    async (req, res) => {
      const { trend } = req.body;
      console.log(trend);
      const activity = await Activity.findOneAndUpdate(
        {
          _userId: req.user.id,
        },
        { $addToSet: { savedNews: trend } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      // console.log('activity', activity);
      res.json(activity);
    }
  );

  //remove saved news
  app.post(
    '/api/mongodb/delete/activity/savednews',
    requireLogin,
    async (req, res) => {
      const { trend } = req.body;
      console.log(trend);
      const activity = await Activity.findOneAndUpdate(
        {
          _userId: req.user.id,
        },
        { $pull: { savedNews: { url: trend.url } } }
      );
      res.json(activity);
    }
  );

  //get savedNews of activity
  app.get(
    '/api/mongodb/get/acitivity/savednews',
    requireLogin,
    async (req, res) => {
      const savedNews = await Activity.find({
        _userId: req.user.id,
      }).select('savedNews');
      // console.log('savedNews', savedNews);
      res.json(savedNews);
    }
  );

  //add liked news and return activity
  app.post(
    '/api/mongodb/save/activity/likednews',
    requireLogin,
    async (req, res) => {
      const { trend } = req.body;
      console.log(trend);
      const activity = await Activity.findOneAndUpdate(
        {
          _userId: req.user.id,
        },
        { $addToSet: { likedNews: trend } },
        { new: true, upsert: true, setDefaultsOnInsert: true }
      );
      // console.log('activity', activity);
      res.json(activity);
    }
  );
};
