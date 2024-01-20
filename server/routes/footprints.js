const { Router } = require('express');
const express = require('express');

const footprintsMiddleware = require('../Middleware/footprintsMiddleware');
const wishlistMiddleware = require('../Middleware/wishlistMiddleware')

const router = express.Router();

// Get list of restaurants in a city
router.get('/search/:city', footprintsMiddleware.getCityId, (req, res) => {
  console.log('in city');
  res.status(200).json({ res: res.locals });
});

// Return all footprints
router.get('/test', wishlistMiddleware.find , (req, res) => {
  res.status(200).send({test: test});
});


// Return all footprints
router.post('/', (req, res) => {
  res.status(200).send(res.locals.watchHistory);
});

// Add footprints to database
router.post('/add', (req, res) => {
  res.status(200).send('Success!');
});

module.exports = router;
