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
    const users = await User.findAll({ attributes: ["id", "name", "email","profession"] });
    res.json(users);
  } catch (error) {
    console.error("Error Fetching Users:", error);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

exports.updateUser  = async (req, res) => {
    try {
        const [updatedCount] = await User.update(
            { profession: "Musician" },
            {
                where: {
                    profession: "Singer",
                },
            }
        );

        if (updatedCount > 0) {
            res.status(200).json({ message: "User  updated successfully"});
        } else {
            res.status(404).json({ message: "No users found with null profession" });
        }
    } catch (error) {
        console.log("Error Updating user: ", error);
        res.status(500).json({ error: "Error Updating User" });
    }
};
