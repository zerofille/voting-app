const { Logs } = require("../models");

module.exports.getLogs = async (req, res, next) => {
  try {
    const result = await Logs.findAll();
    res.send(result);
  } catch (error) {
    next(error);
  }
};
