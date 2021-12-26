module.exports.errorHandler = async (err, res, req, next) => {
  next(err);
  res.send(err)
};
