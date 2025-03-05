module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addIndex("Users", ["email"], {
      unique: true,
      name: "users_email_index",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeIndex("Users", "users_email_index");
  },
};
