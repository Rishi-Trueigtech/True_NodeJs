const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.route('/')
    .get(tourController.getAllTours)
    .post(authController.restrictTo('admin', 'lead-guide'), tourController.createTour);

module.exports = router;