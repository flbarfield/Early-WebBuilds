var http = require('http'),
	fs = require('fs'),
	path = require('path');

var server = http.createServer(function (req, res) {
	'use strict';
	console.log('Responding to a request');
	var url = req.url,
		fileName = 'index.html';
	
	if (url.length > 1) {
		fileName = url.substring(1);
	}
	console.log(fileName);
	var filePath = path.resolve(_dirname, 'app', fileName);
	fs.readFile(filePath, function (err, data) {
		res.end(data);
	});
});
server.listen(3000);