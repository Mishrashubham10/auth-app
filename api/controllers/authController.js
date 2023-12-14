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
    password: hashPwd,
  };

  const user = await User.create(userObj);

  if (!user) return res.status(500).json({ message: 'Something went wrong' });

  res.status(201).json(user);
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

  if (!match) return res.status(403).json({ message: 'Invalid credentials' })

  res.status(200).json(`User with name of ${username} logged in`);
});

// Logout
const logout = asyncHandler(async (req, res) => {
  const { id } = req.params;

  if (!id) return res.status(404).json({ message: 'Id is required!' });

  const user = await User.findByIdAndDelete(id);

  if (!user) return res.status(500).json({ message: 'User not found' });

  res.status(200).json({ message: 'User deleted' });
});

module.exports = { register, login, logout };
