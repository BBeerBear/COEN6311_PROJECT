const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  facebookId: String,
  name: String,
  email: String,
  picture: String,
  profile: { geo: [String], preferredCategories: [String] },
});

mongoose.model('users', userSchema);
