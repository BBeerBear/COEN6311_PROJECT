const passport = require('passport');

//router handler
module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      // Successful authentication, redirect home.
      res.redirect('http://localhost:3000/dashboard');
    }
  );

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { scope: ['profile', 'email'] }),
    (req, res) => {
      res.redirect('http://localhost:3000/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    //passport automatically attach logout function into the req object
    req.logout();
    // res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    //passport automatically attach user object into the req object
    res.send(req.user);
    // res.send(req);
  });
};
