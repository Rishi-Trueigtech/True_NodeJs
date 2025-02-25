const Booking = require('../../models/Booking');

exports.createBookingCheckout = async (req, res, next) => {
    const { tourId, userId, price } = req.query;

    if (!tourId || !userId || !price) {
        return res.status(400).json({
            status: 'fail',
            message: 'Missing parameters: tour, user, or price',
        });
    }

    try {
        await Booking.create({ tourId, userId, price });

        res.status(200).json({
            status: 'success',
            message: 'Booking created successfully',
        });
    } catch (err) {
        res.status(500).json({
            status: 'error',
            message: err.message,
        });
    }
};

exports.getAllBookings = async (req, res, next) => {
    const bookings = await Booking.findAll();
    res.status(200).json({
        status: 'success',
        results: bookings.length,
        data: {
            bookings,
        },
    });
};