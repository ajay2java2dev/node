//const http = require('http');
//const routes = require('./routes');
//console.log(routes.someText);
//const server = http.createServer(routes.handler);
//const server = http.createServer(app);
//server.listen(3000);

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: false})); //register a middleware

// Import routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// Define your routes here
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// Define a 404 page
app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});