const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  spentTime: Date,
  typeOfNewsWatched: [String],
  watchedLog: String,
});

mongoose.model('activity', activitySchema);
