exports.notFoundHandler = (req, res, next) => {
  let err = new Error('Resource Not Found');
  err.status = 404;
  next(err);
};

exports.internalServerHandler = (err, req, res, next) =>
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Oops, something went wrong!',
    },
  });
