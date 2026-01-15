const User = require("../models/User");

exports.getUsers = async (req, res) => {
  console.log("IP Address:", req.ip);
  const users = await User.findAll({
    attributes: { exclude: ["password"] },
  });
  res.json(users);
};

exports.getUserById = async (req, res) => {
  console.log("IP Address:", req.ip);
  const user = await User.findByPk(req.params.id, {
    attributes: { exclude: ["password"] },
  });
  res.json(user);
};

exports.createUser = async (req, res) => {
  console.log("IP Address:", req.ip);
  const user = await User.create(req.body);
  res.json(user);
};

exports.updateUser = async (req, res) => {
  console.log("IP Address:", req.ip);
  await User.update(req.body, {
    where: { id: req.params.id },
  });
  res.json({ message: "User updated" });
};

exports.deleteUser = async (req, res) => {
  console.log("IP Address:", req.ip);
  await User.destroy({
    where: { id: req.params.id },
  });
  res.json({ message: "User deleted" });
};
