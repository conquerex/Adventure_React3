var express = require('express');
var app = express();
var user = require('./routes/user');

var morgan = require('morgan');
var bodyParser = require('body-parser');

/**
 * Middle Ware sample
 */
// var myLogger = function(req, res, next) {
//     console.log(req.url);
//     next();
// };

// app.use(myLogger);

// Log middle ware
app.use(morgan('dev'));

// Json parsing middle ware
app.use(bodyParser.json());

app.use('/', express.static('public'));

app.use('/user', user);

app.listen(3000, function() {
    console.log('Example App is listening on port 3000');
});