// server.js
// load the things we need
var express = require('express');
var app = express();
// set the view engine to ejs
app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
 res.render('pages/index');
});
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});
// this one line is important, without it css and js can't be fetch - https://stackoverflow.com/questions/26019456/external-js-in-an-ejs-template
app.use(express.static(__dirname));

app.listen(8080);
console.log('8080 is the magic port');
