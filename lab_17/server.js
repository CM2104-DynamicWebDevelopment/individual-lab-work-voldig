//load express as app
var express = require('express');
var app = express();

//set the view engine to EJS
app.set('view engine', 'ejs');

//use res.render to laoad up an ejs view file

// indes page
app.get('/', function(req, res) {
  res.render('pages/index');
});

//about pages
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the port which it is using');
