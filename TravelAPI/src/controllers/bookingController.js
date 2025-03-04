import Booking from '../../models/booking.js';
import * as factory from './handlerFactory.js';

export const createBooking = factory.createOne(Booking);
export const getBooking = factory.getOne(Booking);
export const updateBooking = factory.updateOne(Booking);
export const deleteBooking = factory.deleteOne(Booking);
