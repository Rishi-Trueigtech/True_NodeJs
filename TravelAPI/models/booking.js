import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
    }
  }

  Booking.init(
    {
      tourId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      paid: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );

  return Booking;
};
