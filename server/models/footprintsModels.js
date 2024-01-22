const mongoose = require('mongoose');


const MONGO_URI =
  'mongodb+srv://mfronheiser:scratch1@brew.wnjxaus.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'Brew',
});

const Schema = mongoose.Schema;

const footprintsSchema = new Schema({
  userId: { type: String, default: 'user1' },
  restaurant_name: { type: String, required: true },

  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  record_date: { type: String, required: true },
  user_rating: { type: Number, min: 1, max: 10, required: true },
  comment: { type: String, default: "" },
});

const Footprints = mongoose.model('Footprints', footprintsSchema);
module.exports = { Footprints };

