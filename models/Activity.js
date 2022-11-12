const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitySchema = new Schema({
  _userId: { type: Schema.Types.ObjectId, ref: 'users' },
  savedNews: [{ type: Schema.Types.ObjectId, ref: 'news' }],
  spentTime: Date,
  typeOfNewsWatched: [String],
  watchedLog: [String],
});

mongoose.model('activity', activitySchema);
