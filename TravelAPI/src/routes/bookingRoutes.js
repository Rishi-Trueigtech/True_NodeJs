import express from 'express';
import * as bookingController from '../controllers/bookingController.js';
import * as authController from '../controllers/authController.js';

const router = express.Router();

// Protect all routes
router.use(authController.protect);

// Restrict all routes to admin and lead-guide
router.use(authController.restrictTo('admin', 'lead-guide'));

router.route('/').post(bookingController.createBooking);

router
  .route('/:id')
  .get(bookingController.getBooking)
  .patch(bookingController.updateBooking)
  .delete(bookingController.deleteBooking);

export default router;
