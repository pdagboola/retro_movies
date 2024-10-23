const { Router } = require("express");
const tvSeries = Router();

tvSeries.get("/", (req, res) => {
  res.render("tvseries");
});

module.exports = tvSeries;
