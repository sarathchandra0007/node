const http = require('http');

const express = require('express');

const app = express();

const bodyParser = require('body-parser')

// For text parsing
app.use(bodyParser.urlencoded({extended: false}));

// "use" alows us to add new middleware function
// (() => {}) --> creating function
app.use('/add-product', (req, res, next) => {
    console.log('I am in the middleware');
    res.send('<form action = "/product" method = "POST"><input type = "text" name = "title"><button>Add</button></form>');
    // next()  Allows request to go to next middleware
});

app.post('/product', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
});

app.use('/', (req, res, next) => {
    console.log('I am in another middleware')
    res.send('<h1> Exited to learn express</h1>');
});   

app.listen(3000);
// const server = http.createServer(app);
 
// server.listen(3000);
