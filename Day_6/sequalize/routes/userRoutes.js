const express = require("express");
const { createUser, getAllUsers } = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);  // Use controller function
router.get("/", getAllUsers);  // Use controller function

module.exports = router;
