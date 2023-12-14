const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
    res.send('Youre registered in successfully');
})

router.post('/login', (req, res) => {
    res.send('Youre logged in successfully');
})

router.get('/logout', (req, res) => {
    res.send('Youre logged out successfully');
})

module.exports = router;