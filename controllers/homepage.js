const { Router } = require("express");
const homepage = Router();

homepage.get("/", (req, res) => {
  res.render("index");
});

module.exports = homepage;
