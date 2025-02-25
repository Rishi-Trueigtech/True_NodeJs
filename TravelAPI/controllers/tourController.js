const { Tour } = require('../models');

exports.createTour = async (req, res) => {
  const tour = await Tour.create(req.body);
  res.json(tour);
};

exports.getTours = async (req, res) => {
  const tours = await Tour.findAll();
  res.json(tours);
};

exports.getTour = async (req, res) => {
  const tour = await Tour.findByPk(req.params.id);
  res.json(tour);
};

exports.updateTour = async (req, res) => {
  await Tour.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Tour updated' });
};

exports.deleteTour = async (req, res) => {
  await Tour.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Tour deleted' });
};
