// models/Post.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Post extends Model {}

Post.init({
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Post',
});

// Export the Post model
module.exports = Post;