const mongoose = require('mongoose');

const getStartAndEndDates = require('../utils/getStartAndEndDates');
const Record = mongoose.model('Record');

exports.recordHoursCoded = async (req, res, next) => {
  try {
    const { date, hoursCoded } = req.body;

    // update existing day, otherwise create doc
    const { dateStart, dateEnd } = getStartAndEndDates(date);

    const record = await Record.updateOne(
      {
        _user: req.user.id,
        date: {
          $gte: new Date(`${dateStart}`),
          $lt: new Date(`${dateEnd}`),
        },
      },
      {
        $setOnInsert: {
          date,
        },
        $set: {
          hoursCoded: +hoursCoded,
        },
      },
      {
        upsert: true,
      }
    ).exec();
    res.status(200).json(record);
  } catch (err) {
    return next(err);
  }
};
