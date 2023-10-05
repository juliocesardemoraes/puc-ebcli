var express = require("express");
const pool = require("../database/connection");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  pool.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw new Error(err);
    res.send(result);
  });
});

module.exports = router;
