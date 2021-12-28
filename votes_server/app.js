const express = require("express");
const app = express();
const votesController = require("./controllers/votesController");
const logsController = require("./controllers/logsController");
const bodyParser = express.json();
const { logsMiddleware } = require("./middleware/logsMiddleware");
const cors = require("cors");

app.use(cors());
app.use(bodyParser);
app.use(logsMiddleware);

app.post("/votes", votesController.addVote);
app.post("/statistic", votesController.getVotesByDate);
app.get("/logs", logsController.getLogs);

app.use((err, req, res, next) => {
  res.send(err);
});

module.exports = app;
