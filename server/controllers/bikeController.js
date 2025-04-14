const Bike = require('../models/Bike');

exports.getAllBikes = async (req, res) => {
  const bikes = await Bike.find();
  res.json(bikes);
};

exports.getBikeById = async (req, res) => {
  const bike = await Bike.findById(req.params.id);
  if (!bike) return res.status(404).json({ message: 'Bike not found' });
  res.json(bike);
};

exports.addBike = async (req, res) => {
  const bike = await Bike.create(req.body);
  res.json(bike);
};

exports.updateBike = async (req, res) => {
  const bike = await Bike.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(bike);
};

exports.deleteBike = async (req, res) => {
  await Bike.findByIdAndDelete(req.params.id);
  res.json({ message: 'Bike deleted' });
};
