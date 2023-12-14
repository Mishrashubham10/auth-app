const bcrypt = require('bcrypt');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

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
        password: hashPwd
    };

    const user = await User.create(userObj);

    if (!user) return res.status(500).json({ message: 'Something went wrong' });

    res.status(200).json(user);
});

// Login
const login = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User logged in successfully' });
});

// Logout
const logout = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'User logged out successfully' });
});

module.exports = { register, login, logout };
