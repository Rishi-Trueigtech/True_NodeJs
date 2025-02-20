const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, { foreignKey: 'Id' });
Post.belongsTo(User, { foreignKey: 'Id' });