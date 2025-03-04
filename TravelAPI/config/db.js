import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize("travel_api", "postgres", "#Rishi432", {
  host: "127.0.0.1",
  dialect: 'postgres',
});

export default sequelize;
