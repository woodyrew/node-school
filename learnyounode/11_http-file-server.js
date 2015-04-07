"use strict";

var http = require('http');
var fs = require('fs');

var http_port = process.argv[2];
var file_to_serve = process.argv[3];

var server = http.createServer(function (req, res) {
	fs.createReadStream(file_to_serve).pipe(res);
});
server.listen(http_port)

/* Official answer:
var http = require('http')
var fs = require('fs')

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' })

	fs.createReadStream(process.argv[3]).pipe(res)
})

server.listen(Number(process.argv[2]))

*/