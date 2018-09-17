const router = require('express').Router();
const { recordHoursCoded } = require('../handlers/records');

router.post('/', recordHoursCoded);

module.exports = router;
