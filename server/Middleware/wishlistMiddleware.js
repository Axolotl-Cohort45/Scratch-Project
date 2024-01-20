const models = require('../models/wishlistModels');

const wishlistMiddleware = {};

wishlistMiddleware.find = (req, res, next) => {
    console.log('hi');
    models.Wishlist.find({})
      .exec()
      .then((data) => {
        console.log(data)
        res.locals.characters = data;
        return next();
      })
}

module.exports = wishlistMiddleware;