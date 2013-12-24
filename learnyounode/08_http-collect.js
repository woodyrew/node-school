"use strict";

var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function (response) {
	response.setEncoding('utf8');
	// response.on('data', function (chunk) {
	response.pipe(bl(function (err, data) {
		if (err) {
			return console.error(data);
		}

		console.log(data.length);
		console.log(data.toString());
	}));
});

/* Official answer:
var http = require('http')
var bl = require('bl')

http.get(process.argv[2], function (response) {
	response.pipe(bl(function (err, data) {
		if (err)
			return console.error(data)

		data = data.toString()
		console.log(data.length)
		console.log(data)
	}))  
})
*/