const { Router } = require('express');
const express = require('express');

const router = express.Router();

const wishlistMiddleware = require('../Middleware/wishlistMiddleware');

// add favorite to wishlist database
router.post('/add', wishlistMiddleware.addFavorite, (req, res) => {
  console.log('in add favorite');
  res.status(200).json(res.locals.favorite);
});

router.get('/', wishlistMiddleware.display, (req, res) => {
  console.log('in show list');
  res.status(200).json(res.locals.favoritesList);
});

router.delete('/', wishlistMiddleware.delete, (req, res) => {
  console.log('in delete');
  res.status(200);
});
module.exports = router;
