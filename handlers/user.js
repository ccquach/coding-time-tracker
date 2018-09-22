exports.setDailyGoal = async (req, res, next) => {
  try {
    const { dailyGoal } = req.body;

    // validate data
    if (+dailyGoal < 0 || +dailyGoal > 24) {
      return next({
        status: 400,
        message: 'Failed to update! Set a daily goal between 0 and 24 hours.',
      });
    }

    // update user
    req.user.dailyGoal = +dailyGoal;
    const user = await req.user.save();

    res.status(200).json(user);
  } catch (err) {
    return next({
      status: 400,
      message: err.message,
    });
  }
};
