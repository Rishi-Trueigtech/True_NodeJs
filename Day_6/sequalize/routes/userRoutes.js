const express = require("express");
const { createUser, getAllUsers,updateUser} = require("../controllers/userController");

const router = express.Router();

router.post("/", createUser);  // Use controller function
router.get("/", getAllUsers);  // Use controller function
router.patch("/",updateUser);

module.exports = router;
