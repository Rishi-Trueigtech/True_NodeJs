const { Sequelize } = require('sequelize');
const config = require('../config/config.json').development;

const sequelize = new Sequelize("travel_api", "postgres", "#Rishi432", {
  host: "127.0.0.1",
  dialect: "postgres",
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
db.Tour = require('./tour')(sequelize, Sequelize);
db.Booking = require('./booking')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Booking, { foreignKey: 'userId' });
db.Tour.hasMany(db.Booking, { foreignKey: 'tourId' });
db.Booking.belongsTo(db.User, { foreignKey: 'userId' });
db.Booking.belongsTo(db.Tour, { foreignKey: 'tourId' });

module.exports = db;
