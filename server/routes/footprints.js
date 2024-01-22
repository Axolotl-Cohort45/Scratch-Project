const { Router } = require('express');
const express = require('express');

const footprintsMiddleware = require('../Middleware/footprintsMiddleware');
const wishlistMiddleware = require('../Middleware/wishlistMiddleware');

const router = express.Router();

// Return all footprints
router.get('/', footprintsMiddleware.display, (req, res) => {
  console.log('in display footprint ');
  res.status(200).send(res.locals.footprintsList);
});

// Add footprints to database
router.post('/add', footprintsMiddleware.addFootprint, (req, res) => {
  return res.status(200).json(res.locals.footprint);
});

module.exports = router;
