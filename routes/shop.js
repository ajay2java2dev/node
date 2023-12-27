const express = require('express');
const router = express.Router();

// Define your routes here
router.get("/", (req, res, next) => {
    console.log('Base middleware!');
    res.send('<h1>Hello from Express!</h1>'); //send allows us to send a response
});

module.exports = router;
