const { Logs } = require("../models");

module.exports.logsMiddleware = async (req, res, next) => {
  try {
    const { body } = req;

    await Logs.create({
      url: `${req.protocol}://${req.get("host")}${req.originalUrl}`,
      json: body,
    });
    next();
  } catch (error) {
    next(error);
  }
};
