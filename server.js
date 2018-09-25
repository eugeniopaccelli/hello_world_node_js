var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('<h1>Hello, World</h1>');
}).listen(8000);

console.log("Server is running at: http://localhost:8000/");