const { DataTypes } = require('sequelize');
const sequelize = require("../config/db");
const User = require('./User');
const Tour = require('./Tour');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    tourId: {
        type: DataTypes.INTEGER,
        references: {
            model: Tour,
            key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
    },
    bookingDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
});

User.hasMany(Booking);
Tour.hasMany(Booking);
Booking.belongsTo(User);
Booking.belongsTo(Tour);

module.exports = Booking;