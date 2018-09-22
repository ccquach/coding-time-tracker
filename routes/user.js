const router = require('express').Router();

const requireLogin = require('../middleware/requireLogin');
const { setDailyGoal } = require('../handlers/user');

router.post('/', requireLogin, setDailyGoal);

module.exports = router;
