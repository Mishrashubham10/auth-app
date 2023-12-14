const bcrypt = require('bcrypt');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

// Register
const register = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password)
    return res.status(404).json({ message: 'All fields are required' });

  // Hashing password
  const hashPwd = await bcrypt.hash(password, 10);

  // Create user object
  const userObj = {
    username,
    email,
    password: hashPwd,
  };

  const user = await User.create(userObj);

  // JWT
  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  });
  const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
  res.cookie('token', refreshToken, {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });

  if (!user) return res.status(500).json({ message: 'Something went wrong' });

  res.status(201).json({ accessToken });
});

// Login
const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password)
    return res.status(404).json({ message: 'All fields are required' });

  //   See if a user exists to login
  const user = await User.findOne({ username });

  if (!user) return res.status(404).json({ message: 'User not found' });

  //   Match passwords of the users
  const match = await bcrypt.compare(password, user.password);

  if (!match) return res.status(403).json({ message: 'Invalid credentials' });

  const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  const refreshToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: '15m',
  });
  res.cookie('token', refreshToken, { httpOnly: true, maxAge: 3 * 30 * 30 * 60 });

  res.status(200).json({ accessToken });
});

// @desc Logout
// @route POST /auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.status(204);
  res.clearCookie('jwt', { httpOnly: true });
  res.json({ message: 'Cookie cleared' });
};

module.exports = { register, login, logout };
