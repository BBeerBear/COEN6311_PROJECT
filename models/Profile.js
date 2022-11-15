const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  country: String,
  preferredCategories: [String],
});

module.exports = mongoose.model('profile', profileSchema);
