const passport = require('passport');

const initiateAuth = passport.authenticate('google', {
  scope: ['profile', 'email'],
});

const getUserAccount = passport.authenticate('google');

const logout = (req, res, next) => {
  try {
    req.logout();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
};

const redirectHome = (req, res, next) => {
  res.redirect('/');
};

const getCurrentUser = (req, res, next) => {
  try {
    res.send(req.user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  initiateAuth,
  getUserAccount,
  logout,
  redirectHome,
  getCurrentUser,
};
