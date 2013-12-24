"use strict";

var http = require('http');
var async = require('async');
var bl = require('bl');

var urls = [];
for (var i = 2; i <= 4; i++) {
	urls.push(process.argv[i]);
};

async.parallel([
    function(callback){
        http.get(urls[0], function (response) {
			response.setEncoding('utf8');
			// response.on('data', function (chunk) {
			response.pipe(bl(function (err, data) {
				if (err) {
					return callback(err);
				}

				callback(null, data.toString());
			}));
		});
    },
    function(callback){
        http.get(urls[1], function (response) {
			response.setEncoding('utf8');
			// response.on('data', function (chunk) {
			response.pipe(bl(function (err, data) {
				if (err) {
					return callback(err);
				}

				callback(null, data.toString());
			}));
		});
    },
    function(callback){
        http.get(urls[2], function (response) {
			response.setEncoding('utf8');
			// response.on('data', function (chunk) {
			response.pipe(bl(function (err, data) {
				if (err) {
					return callback(err);
				}

				callback(null, data.toString());
			}));
		});
    }
],
// optional callback
function(err, results){
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    for (var i = 0; i < results.length; i++) {
    	console.log(results[i]);
    };
});

/* Official answer:

*/