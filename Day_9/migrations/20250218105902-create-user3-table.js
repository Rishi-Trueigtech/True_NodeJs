"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("User3", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      profession: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    // Copy Data from Users to User3
    await queryInterface.sequelize.query(`
      INSERT INTO "User3" (id, name, email, password, profession, "createdAt", "updatedAt")
      SELECT id, name, email, password, profession, "createdAt", "updatedAt" FROM "Users";
    `);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("User3");
  },
};
