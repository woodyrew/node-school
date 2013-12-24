"use strict";

var http = require('http');
var async = require('async');
var bl = require('bl');

var urls = [];
for (var i = 2; i <= 4; i++) {
	urls.push(process.argv[i]);
};

var getHttp = function getHttp (index, callback) {
	http.get(urls[0 + index], function (response) {
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

async.parallel([
    function(callback){
        getHttp(0, callback);
    },
    function(callback){
        getHttp(1, callback);
    },
    function(callback){
        getHttp(2, callback);
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
var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
	for (var i = 0; i < 3; i++)
		console.log(results[i])
}

function httpGet (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err)
				return console.error(data)

			results[index] = data.toString()
			count++

			if (count == 3) // yay! we are the last one!
				printResults()
		}))
	})
}

for (var i = 0; i < 3; i++)
	httpGet(i)
*/