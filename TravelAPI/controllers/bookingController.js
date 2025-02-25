const { Booking } = require('../models');

exports.getBookings = async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
};

exports.createBooking = async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json(booking);
};

exports.updateBooking = async (req, res) => {
  await Booking.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'Booking updated' });
};

exports.deleteBooking = async (req, res) => {
  await Booking.destroy({ where: { id: req.params.id } });
  res.json({ message: 'Booking deleted' });
};
