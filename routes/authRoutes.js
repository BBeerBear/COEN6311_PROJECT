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
      console.log(req);
      // res.redirect('/dashboard');
      res.redirect('http://localhost:3000/dashboard');
    }
  );

  app.get('/auth/facebook', passport.authenticate('facebook'));

  app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', { scope: ['profile', 'email'] }),
    (req, res) => {
      // res.redirect('/dashboard');
      console.log();
      res.redirect('http://localhost:3000/dashboard');
    }
  );

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
