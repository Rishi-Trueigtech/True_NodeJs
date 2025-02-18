const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('demoDB', 'postgres', '#Rishi432', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;