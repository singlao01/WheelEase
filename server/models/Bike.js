const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  engine: String,
  mileage: String,
  topSpeed: String,
  type: String, // 'buy' or 'rent'
  imageUrl: String,
});

module.exports = mongoose.model('Bike', bikeSchema);
