var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var app = express();

app.use(express.static(__dirname + '/src')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser()); // pull information from html in POST
app.use(methodOverride()); // simulate DELETE and PUT

app.listen(1234);
console.log('Magic happens on port ' + 1234); // shoutout to the user