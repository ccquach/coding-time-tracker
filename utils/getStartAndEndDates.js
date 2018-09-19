module.exports = date => {
  let dateStart = new Date(date);
  dateStart.setSeconds(0);
  dateStart.setHours(0);
  dateStart.setMinutes(0);

  let dateEnd = new Date(date);
  dateEnd.setHours(23);
  dateEnd.setMinutes(59);
  dateEnd.setSeconds(59);

  return {
    dateStart,
    dateEnd,
  };
};
