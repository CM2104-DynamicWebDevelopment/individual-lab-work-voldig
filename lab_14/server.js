/**
 * @Author: John Isaacs <john>
 * @Date:   11-Mar-182018
 * @Filename: server.js
 * @Last modified by:   john
 * @Last modified time: 12-Mar-182018
 */
var express = require('express');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'U5b0iyQZEdTj5aQ3NzVeh8jxS',
  consumer_secret: 'Jtbk8gC5ra94tkdhQTdbVexx35nDL1EjHuvl4w2LGbknE2jRR4',
  access_token_key: '1109036022015381505-yhTpfIGLNUUcUkyYSKuo8vkH37etfK',
  access_token_secret: 'mlxj3ZPGUlYEMtH3aMXyMvcDuZdreKd5BPyAzgkmjzre8'
});


app.use(express.static('public'))



app.get('/tweetsjson', function(req, res) {
  var params = {
    screen_name: 'nodejs'
  };
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      var json = [];
      for (var i = 0; i < tweets.length; i++) {
        json.push({
          name: tweets[i].user.name,
          text: tweets[i].text
        });
      }
      res.send(JSON.stringify(json));
    }
  });
});


app.listen(8080);
