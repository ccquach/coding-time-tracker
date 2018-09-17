const mongoose = require('mongoose');
const moment = require('moment');

const Record = mongoose.model('Record');

exports.recordHoursCoded = async (req, res, next) => {
  try {
    const { date, hoursCoded } = req.user;

    // parse date
    const year = moment(date).format('YYYY');
    const month = moment(date).format('MM');
    const weekIndex = moment(date)
      .startOf('week')
      .isoWeek();
    const day = moment(date).format('DD');

    // update existing day, otherwise create doc
    const record = await Record.updateOne(
      {
        _user: req.user.id,
        years: {
          year,
          months: {
            month,
            weeks: {
              weekIndex,
              days: {
                day,
              },
            },
          },
        },
      },
      {
        $set: { hoursCoded },
      },
      {
        upsert: true,
      }
    ).exec();
    res.json(record);
  } catch (err) {
    return next(err);
  }
};
