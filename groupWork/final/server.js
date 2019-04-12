// server.js
// load the things we need
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

mongoose.connect('mongodb://localhost:27017/eclipsim', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))


app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));









// use res.render to load up an ejs view file
// index page
app.get('/', function(req, res) {
 res.render('pages/index');
});
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/points/new', (req, res) => {
    res.render('pages/addPoint.ejs')
});
app.post('/points/store', (req, res) => {
    console.log(req.body)
    res.redirect('/')
});

















// this one line is important, without it css and js can't be fetch - https://stackoverflow.com/questions/26019456/external-js-in-an-ejs-template
app.use(express.static(__dirname));

app.listen(8080);
console.log('8080 is the magic port');
