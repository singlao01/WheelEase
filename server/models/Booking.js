const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bikeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bike' },
  date: Date,
});

module.exports = mongoose.model('Booking', bookingSchema);
