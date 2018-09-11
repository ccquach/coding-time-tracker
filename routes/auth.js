const router = require('express').Router();
const handlers = require('../handlers/auth');

router.get('/google', handlers.initiateAuth);
router.get('/google/callback', handlers.getUserAccount, handlers.redirectHome);
router.get('/logout', handlers.logout);
router.get('/current_user', handlers.getCurrentUser);

module.exports = router;
