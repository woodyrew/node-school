"use strict";

var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding('utf8');
	// response.on('data', function (chunk) {
	response.pipe(bl(function (err, data) {
		console.log(data.length);
		console.log(data.toString());
	}));
});

/* Official answer:
*/