const express = require('express');
const { createTour, getTours } = require('../controllers/tourController');
const router = express.Router();

router.post('/', createTour);
router.get('/', getTours);

module.exports = router;