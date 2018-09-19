const router = require('express').Router();

const requireLogin = require('../middleware/requireLogin');
const { recordHoursCoded } = require('../handlers/records');

router.post('/', requireLogin, recordHoursCoded);

module.exports = router;
