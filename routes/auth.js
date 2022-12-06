const passport = require('passport');
const express = require('express');

const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google'),
  (req, res) => {
    // res.redirect('/');
    res.redirect('http://localhost:3000/');
  }
);

router.get('/auth/facebook', passport.authenticate('facebook'));

router.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', { scope: ['profile', 'email'] }),
  (req, res) => {
    // res.redirect('/');
    res.redirect('http://localhost:3000/');
  }
);

router.get('/api/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
