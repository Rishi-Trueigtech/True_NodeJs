const express = require('express');
const { createTour, getTours, getTour, updateTour, deleteTour } = require('../controllers/tourController');
const router = express.Router();

router.post('/', createTour);
router.get('/', getTours);
router.get('/:id', getTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);

module.exports = router;
