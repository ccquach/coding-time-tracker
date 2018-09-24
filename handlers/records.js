const mongoose = require('mongoose');

const getStartAndEndDates = require('../utils/getStartAndEndDates');
const querySumForDateRange = require('../utils/querySumForDateRange');
const getCurrentDateRange = require('../utils/getCurrentDateRange');
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
          $gte: new Date(dateStart),
          $lte: new Date(dateEnd),
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
    return next({
      status: 400,
      message: err.message,
    });
  }
};

exports.getHoursCoded = async (req, res, next) => {
  try {
    const userId = req.user.id;

    // get data for today
    const { todayDateStart, todayDateEnd } = getCurrentDateRange.day();
    const hoursForToday = await querySumForDateRange(
      Record,
      'hoursCoded',
      userId,
      todayDateStart,
      todayDateEnd
    );

    // aggregate data for week
    const {
      currentWeekDateStart,
      currentWeekDateEnd,
    } = getCurrentDateRange.week();
    const hoursForWeek = await querySumForDateRange(
      Record,
      'hoursCoded',
      userId,
      currentWeekDateStart,
      currentWeekDateEnd
    );

    // aggregate data for month
    const {
      currentMonthDateStart,
      currentMonthDateEnd,
    } = getCurrentDateRange.month();
    const hoursForMonth = await querySumForDateRange(
      Record,
      'hoursCoded',
      userId,
      currentMonthDateStart,
      currentMonthDateEnd
    );

    res.status(200).json({
      hoursCoded: {
        today: hoursForToday,
        week: hoursForWeek,
        month: hoursForMonth,
      },
    });
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};
