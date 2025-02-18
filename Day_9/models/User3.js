const { DataTypes } = require("sequelize");
const sequelize = require("../database");
const bcrypt = require("bcryptjs");

const User3 = sequelize.define(
  "User3",
  {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    profession: { type: DataTypes.STRING, allowNull: true },
  },
  { tableName: "User3" }
);

User3.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

module.exports = User3;
