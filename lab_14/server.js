var express = require('express');
	var app = express();
	var Twitter = require('twitter');
	var params = {screen_name: 'nodejs'};
	

	var client = new Twitter({
		consumer_key: 
		consumer_secret:
		access_token_key:
		access_token_secret:
	});
	
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(!error) {
			var output = "";
				for(var t = 0; t < tweets.length; t++) {
					output += "<div>";
					output += "<h2>" + tweets[t].user.screen_name + "</h2>";
					output += "<p>" + tweets[t].text + "</p>"
					output += "</div>";
				}
			res.send(output);	
		}
	});

	app.use(express.static('public'))
	
	app.get('/', function(req, res){
		res.send("Hello world! by express");
	});

	app.listen(8080);
