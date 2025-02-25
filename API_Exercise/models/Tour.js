// models/Tour.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Tour = sequelize.define('Tour', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    difficulty: {
        type: DataTypes.ENUM('easy', 'medium', 'difficult'),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    summary: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    imageCover: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Tour;