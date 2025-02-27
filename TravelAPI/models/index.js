const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json').development;

// Initialize Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

// Define models
db.User = require('./user')(sequelize, DataTypes);
db.Tour = require('./tour')(sequelize, DataTypes);
db.Booking = require('./booking')(sequelize, DataTypes);

// Associations
db.User.hasMany(db.Booking, { foreignKey: 'userId' });
db.Tour.hasMany(db.Booking, { foreignKey: 'tourId' });
db.Booking.belongsTo(db.User, { foreignKey: 'userId' });
db.Booking.belongsTo(db.Tour, { foreignKey: 'tourId' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
