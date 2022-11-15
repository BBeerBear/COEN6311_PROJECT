const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newsSchema = new Schema({
  source: { id: String, name: String },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
});

const activitySchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref: 'users' },
  savedNews: [newsSchema],
  likedNews: [newsSchema],
  spentTime: Date,
  typeOfNewsWatched: [String],
  watchedLog: [String],
});

mongoose.model('activity', activitySchema);
