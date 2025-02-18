// models/associations.js
const User = require('./User');
const Post = require('./Post');

// Define associations
User.hasMany(Post, { foreignKey: 'userId' });
Post.belongsTo(User, { foreignKey: 'userId' });