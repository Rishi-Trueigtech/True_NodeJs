import express from 'express';
import {createTour,updateTour,deleteTour,getTour} from '../controllers/tourController.js';
import { protect, restrictTo } from '../controllers/authController.js';

const router = express.Router();

router
  .route('/')
  .post(
    protect,
    restrictTo('admin', 'lead-guide'),
    createTour
  );

router
  .route('/:id')
  .get(getTour)
  .patch(
    protect,
    restrictTo('admin', 'lead-guide'),
    updateTour
  )
  .delete(
    protect,
    restrictTo('admin', 'lead-guide'),
    deleteTour
  );

export default router;
