let express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/getform', function(req,res){
	var name = req.query.name;
	var quest = req.query.quest;
	res.send("Hi " + name + " I am sure you will " + quest);
});


app.get('/', function(req, res) {
	res.send("Hello world! by express");
});

app.get('/test', function(req,res) {
	res.send("this is route 2");
});
let joke = require('knock-knock-jokes');

app.get('/joke', function(req,res) {
	let randomJoke = joke();
        res.send(randomJoke);
});

//accessing parameters 

app.get('/add', function(req, res) {
	var x = req.query.x;
	var y = req.query.y;
	if(req.query.add) {
		res.send("X + Y= " + (parseInt(x) + parseInt(y)));
	}

});
app.listen(8080);
