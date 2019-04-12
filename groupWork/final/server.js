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
//without that css was not fetched. Found that on https://stackoverflow.com/questions/49595938/error-comes-when-try-to-link-add-css-to-ejs-file
// app.use('/css', express.static('css'));
app.use(express.static(__dirname));
app.listen(8080);
console.log('8080 is the magic port');
