const router = require('express').Router();

const { setDailyGoal } = require('../handlers/user');

router.post('/', setDailyGoal);

module.exports = router;
