const moment = require('moment');

module.exports = (days, weekIndex) =>
  days.filter(
    day =>
      moment(day)
        .startOf('week')
        .isoWeek() === weekIndex
  );
