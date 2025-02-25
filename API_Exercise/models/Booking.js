const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Booking = sequelize.define('Booking', {
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = Booking;