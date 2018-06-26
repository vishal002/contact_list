var express = require('express');

var server = express();
server.use(express.static(__dirname + '/app'));

var port = 8080;
server.listen(port, function() {
	console.log('server listen on 8080')
});