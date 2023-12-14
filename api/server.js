const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8800;

const authRoute = require('./routes/authRoute');
const connectDB = require('./config/db');
const verifyToken = require('./config/verify');

// DB Connection
connectDB();

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors('*'));

// Enable CORS for all routes
app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: 'GET, POST, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
    exposedHeaders: 'Custom-Header',
    credentials: true,
    maxAge: 3600,
  })
);

// routes
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});