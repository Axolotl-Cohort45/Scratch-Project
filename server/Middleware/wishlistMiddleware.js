const models = require('../models/wishlistModels');

const wishlistMiddleware = {};


wishlistMiddleware.addFavorite = async (req, res, next) => {
    try {
        const {
            userId,
            restaurant_name,
            address,
            city,
            phone,
            price_level
        } = req.body

        const favorite = await models.Wishlist.create({
            userId,
            restaurant_name,
            address,
            city,
            phone,
            price_level
        })

        res.locals.favorite = favorite
        return next()
    }
     
    catch (err){
        return next({
            log: `Error in WishlistMiddleware :${err}`,
            message: {
                err: `Error in WishlistMiddleware :${err}`
            },
            status: 500
        })
    }
}

wishlistMiddleware.display = async (req, res, next) => {
    try {
        const favoritesList = await models.Wishlist.find({})
        res.locals.favoritesList = favoritesList
        return next()
    }
    catch (err){
        return next({
            log: `Error in WishlistMiddleware :${err}`,
            message: {
                err: `Error in WishlistMiddleware :${err}`
            },
            status: 500
        })
    }
}

wishlistMiddleware.delete = async (req, res, next) => {
    const {restaurant_name} = req.params
    
    try {
        const deleteFavorite = await models.Wishlist.delete ({restarant_name: restaurant_name})
        return next()
    }
    catch (err){
        return next({
            log: `Error in WishlistMiddleware :${err}`,
            message: {
                err: `Error in WishlistMiddleware :${err}`
            },
            status: 500
        })
    }
}

module.exports = wishlistMiddleware;