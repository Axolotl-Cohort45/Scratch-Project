const { Router } = require("express");
const express = require("express");

const router = express.Router();

// Return search result
router.post("/", (req, res) => {
  res.status(200).send(res.locals.watchHistory);
});

module.exports = router;
