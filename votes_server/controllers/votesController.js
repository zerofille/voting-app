const { Votes, sequelize } = require("../models");
const { addDays, format } = require("date-fns");

module.exports.addVote = async (req, res, next) => {
  try {
    const { body } = req;
    const newVote = await Votes.create(body);

    res.send(newVote);
  } catch (error) {
    next(error);
  }
};
module.exports.getVotesByDate = async (req, res, next) => {
  try {
    const {
      body: { date },
    } = req;

    const toDate = new Date(date);
    const test = addDays(toDate, 1);
    const formatDate = format(test, "yyyy-MM-dd");
    const newDate = formatDate.toString();

    const results = await Votes.findAll({
      where: {
        created_at: newDate,
      },
      attributes: [
        "voted_number",
        [sequelize.fn("count", sequelize.col("voted_number")), "amount"],
      ],
      group: ["voted_number"],
    });

    res.send(results);
  } catch (error) {
    next(error);
  }
};
