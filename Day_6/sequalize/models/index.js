const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database");

const User = require("./user")(sequelize, DataTypes);

// sequelize.sync({ alter: true }) // Ensure tables exist
//   .then(() => console.log("Database Synced"))
//   .catch((err) => console.error("Sync Error:", err));

module.exports = { sequelize, User };
