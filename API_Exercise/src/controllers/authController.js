const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateUser_Signup } = require('../validators/userValidator');

const signToken = (id) => {
    return jwt.sign({ id }, "Rishi", {
        expiresIn: "1h",
    });
};

const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user,
        },
    });
};

exports.signup = async (req, res, next) => {
    const valid = validateUser_Signup(req.body);
    if (!valid) {
        return next();
    }

    const { name, email, password, passwordConfirm } = req.body;

    if (!email || !password) {
        return next();
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser  = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    createSendToken(newUser , 201, res);
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next();
    }

    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return next();
    }

    createSendToken(user, 200, res);
};