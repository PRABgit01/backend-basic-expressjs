const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user page");
});

router.get("/new", (req, res) => {
  res.send("user id");
});

module.exports = router;
