const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
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
