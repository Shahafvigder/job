const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.static("public"));
app.use(cors());

const routes = require("./routes/index");
app.use(routes);

app.all("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
