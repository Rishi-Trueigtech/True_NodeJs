const { User } = require("../models");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Create new user
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error("Error Creating User:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};


//Get All Users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: ["id", "name", "email"] });
    res.json(users);
  } catch (error) {
    console.error("Error Fetching Users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};
