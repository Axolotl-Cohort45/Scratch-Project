const { Router } = require('express');
const express = require('express');

const router = express.Router();

const footprintsMiddleware = require('../Middleware/footprintsMiddleware');

// Return search result
router.get('/', footprintsMiddleware.getCityId, (req, res) => {
  console.log('in city');
  res.status(200).json({ res: res.locals });
});

module.exports = router;
