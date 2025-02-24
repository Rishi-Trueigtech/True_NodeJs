const Booking = require('../../models/Booking');

exports.createBooking = async (req, res) => {
    const { userId, tourId, bookingDate } = req.body;
    const booking = await Booking.create({ userId, tourId, bookingDate });
    res.status(201).json(booking);
};

exports.getBookings = async (req, res) => {
    const bookings = await Booking.findAll();
    res.json(bookings);
 };