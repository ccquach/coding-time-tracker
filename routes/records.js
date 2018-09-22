const router = require('express').Router();

const { recordHoursCoded, getHoursCoded } = require('../handlers/records');

router.get('/', getHoursCoded);
router.post('/', recordHoursCoded);

module.exports = router;
