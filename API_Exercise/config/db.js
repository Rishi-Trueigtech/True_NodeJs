const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize("travel1", "postgres", "#Rishi432", {
    host: "127.0.0.1",
    dialect: 'postgres',
});

module.exports = sequelize;