const bcrypt = require('bcrypt');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

// Register
const register = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User registers in successfully" });
});

// Login
const login = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User logged in successfully" });
});

// Logout
const logout = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "User logged out successfully" });
});

module.exports = { register, login, logout };