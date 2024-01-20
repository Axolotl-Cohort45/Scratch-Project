const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
  userId: { type: String, default: "user1" },
  restaurant_name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  price_level: { type: String, required: true },
  cuisine: { type: Array, default: [] },
});

module.exports = mongoose.model("WishLists", wishlistSchema);
