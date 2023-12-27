const path = require('path');
const express = require('express');
const router = express.Router(); //This is a mini express app
const rootDir = require('../helper/path');

// Define your admin routes here
router.get('/add-product', (req, res, next) => {
    console.log('Add Product middleware!');
    res.sendFile(path.join(rootDir, 'views', 'product.html')); 
});

router.post('/add-product', (req, res, next) => {
    // By default, req.body is undefined, 
    // and is populated when you use body-parsing middleware 
    // such as express.json() or express.urlencoded().
    console.log(req.body);
    console.log('Product middleware!, message = ' + req.body.message);
    res.redirect('/') //send allows us to send a response
});

// Export the router object
module.exports = router;
