import db from '../../models/index.js';
import * as factory from './handlerFactory.js';

export const getTour = factory.getOne(db.Tour);
export const createTour = factory.createOne(db.Tour);
export const updateTour = factory.updateOne(db.Tour);
export const deleteTour = factory.deleteOne(db.Tour);
