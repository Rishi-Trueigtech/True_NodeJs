const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const {User} = require('../../models');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const bcrypt = require('bcryptjs');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
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
  // const valid = validateUser_Signup(req.body);
  // if (!valid) {
  //     return next();
  // }

  const { name, email, password,role} = req.body;

  if (!email || !password) {
      return next();
  }

  const hashedPassword = await bcrypt.hash(password, 12);
  // console.log(User);
  // console.log(typeof User.create);
  const newUser  = await User.create({
      name,
      email,
      password: hashedPassword,
      role
  });

  createSendToken(newUser , 201, res);
};


exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email and password exist
  if (!email || !password) {
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) Find user by email and include password
  const user = await User.findOne({ 
    where: { email },
    attributes: { include: ['password'] } 
  });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return next(new AppError('Incorrect email or password', 401));
  }

  // 3) If everything is correct, send token
  createSendToken(user, 200, res);
});


exports.logout = (req, res) => {
  res.cookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
};

exports.protect = catchAsync(async (req, res, next) => {
  // console.log("Middleware triggered: protect");

  let token;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token) {
    console.log("No token found");
    return next(new AppError('You are not logged in! Please log in to get access.', 401));
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log("Decoded Token:", decoded);

  const currentUser = await User.findOne({ where: { id: decoded.id } });
  if (!currentUser) {
    console.log("User not found in DB");
    return next(new AppError('User no longer exists.', 401));
  }

  // console.log("User found:", currentUser);

  req.user = currentUser;
  res.locals.user = currentUser;
  next();
});


// Only for rendered pages, no errors!
exports.isLoggedIn = async (req, res, next) => {
  if (req.cookies.jwt) {
    try {
      // 1) verify token
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      );

      // 2) Check if user still exists
      const currentUser = await User.findById(decoded.id);
      if (!currentUser) {
        return next();
      }

      // 3) Check if user changed password after the token was issued
      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next();
      }

      // THERE IS A LOGGED IN USER
      res.locals.user = currentUser;
      return next();
    } catch (err) {
      return next();
    }
  }
  next();
};

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return next(new AppError('You are not logged in!', 401));
    }

    if (!roles.includes(req.user.role)) {
      console.log("not permitted");
      return next(new AppError('You do not have permission to perform this action', 403));
    }

    next();
  };
};

