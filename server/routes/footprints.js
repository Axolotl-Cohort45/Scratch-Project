const { Router } = require('express');
const express = require('express');

const footprintsMiddleware = require('../Middleware/footprintsMiddleware');
const wishlistMiddleware = require('../Middleware/wishlistMiddleware');

const router = express.Router();

// Get list of restaurants in a city
router.get('/search', footprintsMiddleware.getCityId, (req, res) => {
  console.log('in city');
  res.status(200).json({ res: res.locals });
});

// // Return all footprints
// router.get('/test', (req, res) => {
//   console.log('in test')
//   res.status(200).send({test: 'test'});
// });

// Return all footprints
router.post('/', (req, res) => {
  res.status(200).send(res.locals.watchHistory);
});

// Add footprints to database
router.post('/add', footprintsMiddleware.addFootprint, (req, res) => {
  res.status(200).json(res.locals.footprint);
});

module.exports = router;
