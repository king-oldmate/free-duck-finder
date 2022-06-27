const express = require("express");
const router = express.Router();
const {
  getDucks,
  getDuck,
  setDuck,
  updateDuck,
} = require("../controllers/duckController");

router.route("/").get(getDucks).post(setDuck);

router.route("/:id").put(updateDuck).get(getDuck);

module.exports = router;
