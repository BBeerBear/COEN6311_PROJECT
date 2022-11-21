const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const realatedNewSchema = new Schema({
//   articleTitle: String,
//   source: String,
//   time: String,
//   snippet: String,
// });

const newsSchema = new Schema({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: {
    type: String,
    unique: true,
  },
  urlToImage: String,
  publishedAt: String,
  content: String,
});

mongoose.model('News', newsSchema);
