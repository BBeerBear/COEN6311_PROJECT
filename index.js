const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');

const keys = require('./config/keys');
require('./models/User');
require('./models/News');
require('./models/Activity');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

//middleware:
//req => req.body
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);
app.use(passport.initialize());
app.use(passport.session());

//use defined routes
require('./routes/authRoutes')(app);
require('./routes/trendsRoutes')(app);
require('./routes/activityRoutes')(app);

//listen port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
