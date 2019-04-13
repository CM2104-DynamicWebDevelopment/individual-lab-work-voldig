// server.js
// load the things we need
const express = require('express');
const mongoose = require('mongoose');//this is module for "talking" to mongoDB. It makes Mongo bahave in more structured way
const bodyParser = require('body-parser');
const Point = require('./database/models/Point'); //thats where the point model is(basically what data)
const User = require('./database/models/User');
const bcrypt = require('bcryptjs') //for encryption of the passwords
const expressSession = require('express-session');//persistent logins
const connectMongo = require('connect-mongo');

const app = express();

mongoose.connect('mongodb://localhost:27017/eclipsim', { useNewUrlParser: true })
    .then(() => 'You are now connected to Mongo!')
    .catch(err => console.error('Something went wrong', err));

const mongoStore = connectMongo(expressSession);

app.use(expressSession({
    secret: 'secret',
    store: new mongoStore({
        mongooseConnection: mongoose.connection
    }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));

// from the labs - ejs templating engine
app.set('view engine', 'ejs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}));



const storePoint = require('./middleware/storePoint')
app.use('/points/store', storePoint)

app.get('/', async function(req, res) {
    const points = await Point.find({})
    res.render('pages/index', {
        points //points data is send to site
    })
});
// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});



const auth = require("./middleware/auth");

app.get('/points/new', auth, function(req, res) {
  //checking if user is logged in, if not redirect to login page
  if (req.session.userId) {
      return res.render('pages/addPoint');
  }
    res.redirect('/auth/login');
});
app.post('/points/store', function(req, res) {
    //console.log(req.body)
    Point.create(req.body, function(error, point) {
        res.redirect('/')
    })
});

//registration routes
app.get('/auth/register', function(req, res){
  res.render('pages/register');
});

app.post('/users/register', function(req, res){
  User.create(req.body, function(error, user) {
      if (error) {
          return res.redirect('/auth/register')
      }
      res.redirect('/')
  })
});
//login routers
app.get('/auth/login', function(req, res){
  res.render('pages/login');
});

app.post('/users/login', function(req, res){
  const {
        email,
        password
    } = req.body;
    // try to find the user
    User.findOne({
        email
    }, (error, user) => {
        if (user) {
            // compare passwords.
            bcrypt.compare(password, user.password, (error, same) => {
                if (same) {
                    // store user session.
                    req.session.userId = user._id
                    res.redirect('/')
                } else {
                    res.redirect('/auth/login')
                }
            })
        } else {
            return res.redirect('/auth/login')
        }
    })
});













// this one line is important, without it css and js can't be fetch - https://stackoverflow.com/questions/26019456/external-js-in-an-ejs-template
app.use(express.static(__dirname));

app.listen(8080);
console.log('8080 is the magic port');
