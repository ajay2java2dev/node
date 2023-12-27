const path = require('path');
const express = require('express');
const router = express.Router();
const rootDir = require('../helper/path');

// Define your routes here
router.get("/", (req, res, next) => {
    //sendFile allows us to send a file
    //__dirname is a global variable that holds the absolute path to the project folder
    //__dirname + "/views/shop.html" is the absolute path to the shop.html file
    //path.join() allows us to join multiple path segments together
    console.log(rootDir);
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); 
});

module.exports = router;
