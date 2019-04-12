// server.js
// load the things we need
const express = require('express');
const mongoose = require('mongoose');//this is module for "talking" to mongoDB. It makes Mongo bahave in more structured way
const bodyParser = require('body-parser');
const Point = require('./database/models/Point'); //thats where the point model is(basically what data)


const app = express();

mongoose.connect('mongodb://localhost:27017/eclipsim', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err))

// from the labs - ejs templating engine
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));









// use res.render to load up an ejs view file
// index page
app.get('/', async (req, res) => {
    const posts = await Point.find({})
    res.render('pages/index', {
        posts
    })
});
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});


app.get('/points/new', function(req, res) {
    res.render('pages/addPoint.ejs')
});
app.post('/points/store', function(req, res) {
    //console.log(req.body)
    Point.create(req.body, function(error, point) {
        res.redirect('/')
    })
});

















// this one line is important, without it css and js can't be fetch - https://stackoverflow.com/questions/26019456/external-js-in-an-ejs-template
app.use(express.static(__dirname));

app.listen(8080);
console.log('8080 is the magic port');
