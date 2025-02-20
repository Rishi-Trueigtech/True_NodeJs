"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Bookings", [
      {
        tourId: 1,
        userId: 1, 
        price: 200.0,
        createdAt: new Date(),
        updatedAt: new Date(),
        paid: true,
      },
      {
        tourId: 2,
        userId: 2,
        price: 150.0,
        createdAt: new Date(),
        updatedAt: new Date(),
        paid: false,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Bookings", null, {});
  },
};