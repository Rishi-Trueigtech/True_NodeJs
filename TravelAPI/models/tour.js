import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class Tour extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index.js` file will call this method automatically.
     */
    static associate(models) {
      // Define associations here
    }
  }

  Tour.init(
    {
      name: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      difficulty: DataTypes.STRING,
      price: DataTypes.INTEGER,
      summary: DataTypes.STRING,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Tour',
    }
  );

  return Tour;
};
