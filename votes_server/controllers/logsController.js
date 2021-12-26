const { Logs } = require("../models");
const createHttpError = require("http-errors");

module.exports.getLogs = async (req, res, next) => {
  try {
    const result = await Logs.findAll();
    console.log(result);
    res.send(result);
  } catch (error) {
    next(createHttpError(error));
  }
};
