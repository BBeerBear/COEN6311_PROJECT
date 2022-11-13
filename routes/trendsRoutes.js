const googleTrends = require('google-trends-api');
const mongoose = require('mongoose');

const requireLogin = require('../middleware/requireLogin');

const News = mongoose.model('news');

module.exports = (app) => {
  let trends;

  //get news from mongodb
  app.post('/api/mongodb/get/news', requireLogin, async (req, res) => {
    const { geo, categories, trend_ids } = req.body;
    console.log(geo);
    console.log(categories);
    console.log(trend_ids);
    let news;
    if (trend_ids) {
      news = await News.find({
        // geo: geo,
        // category: categories,
        _id: { $in: trend_ids },
      });
    } else {
      news = await News.find({
        geo: geo,
        category: categories,
        // _id: { $in: trend_ids },
      });
    }
    console.log(news);
    res.json(news);
  });

  //save news to mongodb by categories and location and send back
  // ['all', 'e', 'b', 't', 'h', 's', 'm']
  app.post('/api/mongodb/save/news', requireLogin, async (req, res) => {
    const { geo, category } = req.body;

    googleTrends.realTimeTrends(
      {
        geo: geo,
        category: category,
      },
      async function (err, results) {
        if (err) {
          res.status(500).send('Server Error');
        } else {
          trends = JSON.parse(results).storySummaries.trendingStories;
          trends.map(async (trend) => {
            const existingNew = await News.findOne({
              id: trend.id,
            });
            if (existingNew) {
            } else {
              await new News({
                id: trend.id,
                imgUrl: trend.image.imgUrl,
                newsUrl: trend.image.newsUrl,
                source: trend.image.source,
                relatedNews: trend.articles,
                entityNames: trend.entityNames,
                category: category,
                geo: geo,
              }).save();
            }
          });

          res.json(
            await News.find({
              geo: geo,
              category: category,
            })
          );
        }
      }
    );
  });

  app.post('/api/googletrends/get', requireLogin, (req, res) => {
    const { geo, categories } = req.body;
    googleTrends.realTimeTrends(
      {
        geo: geo,
        category: categories,
      },
      function (err, results) {
        if (err) {
          console.log(err);
        } else {
          const trends = JSON.parse(results).storySummaries.trendingStories;
          const newTrends = trends.map((trend) => ({
            id: trend.id,
            articleTitle: trend.articles[0].articleTitle,
            imgUrl: trend.image.imgUrl,
            newsUrl: trend.image.newsUrl,
            snippet: trend.articles[0].snippet,
            keywords: trend.entityNames,
          }));
          res.json(trends);
        }
      }
    );
  });

  //save news to monogodb by categories and location
  app.post('/api/googletrends/save', requireLogin, async (req, res) => {
    const { categories, geo } = req.body;
    console.log(categories);
    categories.map((category) =>
      googleTrends.realTimeTrends(
        {
          geo: geo,
          category: category,
        },
        function (err, results) {
          if (err) {
            // trends = status(500).json({ error: err });
            return;
          } else {
            trends = JSON.parse(results).storySummaries.trendingStories;
            console.log(trends);
            trends.map(async (trend) => {
              const existingNew = await News.findOne({
                id: trend.id,
              });
              if (existingNew) {
                return;
              }
              const news = await new News({
                id: trend.id,
                title: trend.title,
                imgUrl: trend.image.imgUrl,
                newsUrl: trend.image.newsUrl,
                category: category,
                geo: geo,
              }).save();
              return;
            });
          }
        }
      )
    );
  });
};
