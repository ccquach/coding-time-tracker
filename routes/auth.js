const router = require('express').Router();
const {
  initiateAuth,
  getUserAccount,
  redirectHome,
  logout,
  getCurrentUser,
} = require('../handlers/auth');

router.get('/google', initiateAuth);
router.get('/google/callback', getUserAccount, redirectHome);
router.get('/logout', logout);
router.get('/current_user', getCurrentUser);

module.exports = router;
