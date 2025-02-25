const { User } = require('../models');

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  await User.update(req.body, { where: { id: req.params.id } });
  res.json({ message: 'User updated' });
};

exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.json({ message: 'User deleted' });
};
