const notFoundHandler = (req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
};

const internalServerHandler = (err, req, res, next) =>
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Oops, something went wrong!',
    },
  });

module.exports = {
  notFoundHandler,
  internalServerHandler,
};
