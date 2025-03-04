import { Model, DataTypes } from 'sequelize';

export default (sequelize) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Booking, { foreignKey: 'userId' });
    }
  }

  User.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true, allowNull: false },
      password: DataTypes.STRING,
      dob: DataTypes.DATE,
      gender: DataTypes.STRING,
      role: { type: DataTypes.STRING, defaultValue: 'user' },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );

  return User;
};
