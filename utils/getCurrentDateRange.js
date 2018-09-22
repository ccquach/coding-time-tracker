const moment = require('moment');

const getStartAndEndDates = require('./getStartAndEndDates');
const getDaysInMonth = require('./getDaysInMonth');
const getDaysOfWeek = require('./getDaysOfWeek');

const CURRENT_MONTH = moment(new Date()).month();
const CURRENT_YEAR = moment(new Date()).year();
const DAYS_IN_CURRENT_MONTH = getDaysInMonth(CURRENT_MONTH, CURRENT_YEAR);

exports.day = () => {
  const {
    dateStart: todayDateStart,
    dateEnd: todayDateEnd,
  } = getStartAndEndDates(new Date());

  return { todayDateStart, todayDateEnd };
};

exports.week = () => {
  const currentWeekIndex = moment(new Date())
    .startOf('week')
    .isoWeek();
  const daysInCurrentWeek = getDaysOfWeek(
    DAYS_IN_CURRENT_MONTH,
    currentWeekIndex
  );

  const { dateStart: currentWeekDateStart } = getStartAndEndDates(
    daysInCurrentWeek[0]
  );
  const { dateEnd: currentWeekDateEnd } = getStartAndEndDates(
    daysInCurrentWeek[daysInCurrentWeek.length - 1]
  );

  return { currentWeekDateStart, currentWeekDateEnd };
};

exports.month = () => {
  const { dateStart: currentMonthDateStart } = getStartAndEndDates(
    DAYS_IN_CURRENT_MONTH[0]
  );
  const { dateEnd: currentMonthDateEnd } = getStartAndEndDates(
    DAYS_IN_CURRENT_MONTH[DAYS_IN_CURRENT_MONTH.length - 1]
  );

  return { currentMonthDateStart, currentMonthDateEnd };
};
