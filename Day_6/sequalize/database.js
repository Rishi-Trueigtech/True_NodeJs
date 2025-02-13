const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: console.log, // Log queries to debug
  }
);

sequelize.authenticate()
  .then(() => console.log("PostgreSQL Connected"))
  .catch((err) => console.error("PostgreSQL Connection Error:", err));

module.exports = sequelize;
