const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class User extends Model {}

User.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.email,
        allowNull: false,
        unique: true,
    }
},{
    sequelize,
    modelName:'User',
});

module.exports=User;