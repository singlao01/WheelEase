const Booking = require('../models/Booking');

exports.bookBike = async (req, res) => {
  const booking = await Booking.create({
    userId: req.body.userId,
    bikeId: req.body.bikeId,
    date: req.body.date
  });
  res.json(booking);
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ userId: req.params.userId }).populate('bikeId');
  res.json(bookings);
};
