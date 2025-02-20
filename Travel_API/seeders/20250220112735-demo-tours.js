"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tours", [
      {
        name: "Adventure Trek",
        duration: 5,
        difficulty: "Medium",
        price: 200.0,
        summary: "A thrilling trek through the mountains.",
        description: "This trek offers breathtaking views and an unforgettable experience.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Desert Safari",
        duration: 3,
        difficulty: "Easy",
        price: 150.0,
        summary: "Experience the beauty of the desert.",
        description: "Ride through the dunes and witness stunning sunsets.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tours", null, {});
  },
};