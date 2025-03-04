import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert `import.meta.url` to directory path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read config.json file manually
const configData = JSON.parse(fs.readFileSync(path.join(__dirname, '../config/config.json')));
const config = configData.development;

// Initialize Sequelize
const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

import userModel from './user.js';
import tourModel from './tour.js';
import bookingModel from './booking.js';

// Initialize models
const db = {
  sequelize,
  Sequelize,
  User: userModel(sequelize),  // Pass `sequelize` only (not `DataTypes`)
  Tour: tourModel(sequelize),
  Booking: bookingModel(sequelize),
};

// Define associations
db.User.hasMany(db.Booking, { foreignKey: 'userId' });
db.Tour.hasMany(db.Booking, { foreignKey: 'tourId' });
db.Booking.belongsTo(db.User, { foreignKey: 'userId' });
db.Booking.belongsTo(db.Tour, { foreignKey: 'tourId' });

export default db;
