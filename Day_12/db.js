const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('demoDB1', 'postgres', '#Rishi432',{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;