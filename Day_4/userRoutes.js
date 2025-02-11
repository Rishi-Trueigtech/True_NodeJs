const express = require('express');
const router = express.Router();
const userController = require('./userController');
const validateSchema = require('./validateSchema');

const userSchema = {
    type: "object",
    properties: {
        name: { type: "string", minLength: 3 },
        email: { type: "string", format: "email" },
        age: { type: "integer", minimum: 18 }
    },
    required: ["name", "email"],
    additionalProperties: false
};

router.route('/')
    .get(userController.getAllUsers) 
    .post(validateSchema(userSchema),userController.createUser);

router.route('/:id')
    .get(userController.getUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
