const express = require("express");
const path = require("path");
const app = express();
const PORT = 4000;

const router = require("./routers/router");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Your app is currently on ${PORT}`);
});
