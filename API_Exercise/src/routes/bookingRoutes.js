const express = require('express');
const bookingController = require('../controllers/bookingController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get('/', bookingController.getAllBookings);
router.post('/', bookingController.createBookingCheckout);

module.exports = router;