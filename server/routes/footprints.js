const { Router } = require("express");
const express = require("express");

const router = express.Router();

// Return all footprints
router.post("/", (req, res) => {
  res.status(200).send(res.locals.watchHistory);
});

// Add footprints to database
router.post("/add", (req, res) => {
  res.status(200).send("Success!");
});

module.exports = router;
