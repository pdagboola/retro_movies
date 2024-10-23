const { Router } = require("express");
const router = Router();
const tvSeries = require("../controllers/tvSeries");
const homepage = require("../controllers/homepage");

router.use("/", homepage);

router.use("/series", tvSeries);

// router.use("/korean", korean);

// router.use("/movies", homepage);

// router.use("/", homepage);
// router.use("/", homepage);

module.exports = router;
