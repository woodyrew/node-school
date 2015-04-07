"use strict";

var http = require('http');
var fs = require('fs');

var http_port = process.argv[2];
var file_to_serve = process.argv[3];

var server = http.createServer(function (req, res) {
	fs.createReadStream(file_to_serve).pipe(res);
});
server.listen(http_port)