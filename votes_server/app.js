const express = require("express");
const app = express();
const votesController = require("./controllers/votesController");
const logsController = require("./controllers/logsController");
const bodyParser = express.json();
const { logsMiddleware } = require("./middleware/logsMiddleware");
const cors = require("cors");

app.use(cors());
app.use(bodyParser);


app.post("/votes", logsMiddleware, votesController.addVote);
app.post("/statistic", logsMiddleware, votesController.getVotesByDate);
app.get("/logs", logsController.getLogs);

module.exports = app;
