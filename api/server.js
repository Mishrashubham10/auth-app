const express = require('express');
require('dotenv').config();
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8800;

const authRoute = require('./routes/authRoute');

// middleware
app.use(cookieParser());
app.use(express.json());

// routes
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});