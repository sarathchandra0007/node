const http = require('http');

const express = require('express');

const app = express();

// use alows us to add new middleware function
// (() => {}) --> creating function
app.use((req, res, next) => {
    console.log('I am in the middleware');
    next() // Allows request to go to next middleware
});    

app.use((req, res, next) => {
    console.log('I am in another middleware')
    res.send('<h1> Exited to learn express</h1>');
});   

const server = http.createServer(app);

server.listen(3000);
