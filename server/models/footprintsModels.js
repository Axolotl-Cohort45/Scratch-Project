const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const footprintsSchema = new Schema({
  userId: { type: String, default: "user1" },
  restaurant_name: { type: String, required: true },
  cuisine: { type: Array, default: [] },
  price_level: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  record_date: { type: String, required: true },
  user_rating: { type: Number, min: 1, max: 10, required: true },
  comment: { type: String, default: "" },
});

module.exports = mongoose.model("Footprints", footprintsSchema);
