exports.getAllUsers = (req, res) => {
    res.status(200).json({ message: "Get all users" });
};

exports.createUser = (req, res) => {
    res.status(201).json({ message: "User created" });
};

exports.getUser = (req, res) => {
    res.status(200).json({ message: `Get user with ID ${req.params.id}` });
};

exports.updateUser = (req, res) => {
    res.status(200).json({ message: `User with ID ${req.params.id} updated` });
};

exports.deleteUser = (req, res) => {
    res.status(204).json({ message: `User with ID ${req.params.id} deleted` });
};
