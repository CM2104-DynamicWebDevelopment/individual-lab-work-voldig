let http = require('http');
let joke = require('knock-knock-jokes');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	let randomJoke = joke();
	res.end(randomJoke);
}).listen(8080);
