const passport = require('passport');

exports.initiateAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

exports.getUserAccount = passport.authenticate('google');

exports.logout = (req, res, next) => {
  try {
    req.logout();
    res.redirect('/');
  } catch (err) {
    return next({
      status: 400,
      message: 'Failed to logout.',
    });
  }
};

exports.redirectHome = (req, res, next) => {
  res.redirect('/');
};

exports.getCurrentUser = (req, res, next) => {
  try {
    res.send(req.user);
  } catch (err) {
    return next({
      status: 400,
      message: 'Unable to get current user.',
    });
  }
};
