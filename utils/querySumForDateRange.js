const mongoose = require('mongoose');

/**
 * Return the sum of a specified field
 * over a specifed date range
 * for the currently logged in user
 */
module.exports = async (Model, field, id, dateStart, dateEnd) => {
  const sumForDateRange = await Model.aggregate([
    {
      $match: {
        $and: [
          { _user: new mongoose.Types.ObjectId(id) },
          {
            date: {
              $gte: new Date(dateStart),
              $lte: new Date(dateEnd),
            },
          },
        ],
      },
    },
    {
      $group: {
        _id: '$_user',
        total: { $sum: `$${field}` },
      },
    },
  ]);
  return sumForDateRange[0] ? sumForDateRange[0].total : 0;
};
