var express = require("express");
const hike = require("./hike");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/hikes", hike.index);

module.exports = router;
