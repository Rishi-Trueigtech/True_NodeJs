// import Booking from "../../models/booking.js";
import * as factory from "./handlerFactory.js";
import db from "../../models/index.js";
const sequelize = db.sequelize;
const Booking = db.Booking;

export const createBooking = async (req, res) => {
    const t = await sequelize.transaction();
  
    try {
      const booking = await Booking.create(req.body, { transaction: t });
      res.status(200).json({
        success: true,
        message: "Do you want to confirm the booking? Send `confirm: yes` or `confirm: no`.",
        bookingId: booking.id,
      });
  
    } catch (error) {
      await t.rollback();
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
  export const confirmBooking = async (req, res) => {
    console.log("inside confirm");
    const { bookingId, confirm } = req.body;
    if (!bookingId || !confirm) {
      return res.status(400).json({ success: false, message: "Missing bookingId or confirm response." });
    }
  
    const t = await sequelize.transaction();
  
    try {
      if (confirm.toLowerCase() === "yes") {
        await t.commit(); // Commit transaction
        res.json({ success: true, message: "Booking confirmed!" });
      } else {
        await Booking.destroy({ where: { id: bookingId }, transaction: t });
        await t.rollback();
        res.json({ success: true, message: "Booking canceled!" });
      }
    } catch (error) {
      await t.rollback();
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
export const getBooking = factory.getOne(Booking);
export const updateBooking = factory.updateOne(Booking);
export const deleteBooking = factory.deleteOne(Booking);
