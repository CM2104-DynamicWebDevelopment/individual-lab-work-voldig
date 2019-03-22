var express = require('express');
	var app = express();
	var Twitter = require('twitter');
	var params = {screen_name: 'nodejs'};


	var client = new Twitter({
		consumer_key: "U5b0iyQZEdTj5aQ3NzVeh8jxS",
		consumer_secret: "Jtbk8gC5ra94tkdhQTdbVexx35nDL1EjHuvl4w2LGbknE2jRR4",
		access_token_key: "1109036022015381505-yhTpfIGLNUUcUkyYSKuo8vkH37etfK",
		access_token_secret: "mlxj3ZPGUlYEMtH3aMXyMvcDuZdreKd5BPyAzgkmjzre8"
	});

	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(!error) {
			// var output = "";
			// 	for(var t = 0; t < tweets.length; t++) {
			// 		output += "<div>";
			// 		output += "<h2>" + tweets[t].user.screen_name + "</h2>";
			// 		output += "<p>" + tweets[t].text + "</p>"
			// 		output += "</div>";
			// 	}
			// res.send(output);
			console.log(tweets);
		}
	});

	app.use(express.static('public')); //all static html stuff is in folder public

	app.get('/', function(req, res){
		res.send("Hello world! by express");
	});

	app.listen(8080);
