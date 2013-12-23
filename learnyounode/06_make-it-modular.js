"use strict";

var getFiles = require('./modules/get-files');

var filepath = process.argv[2];
var filter = process.argv[3];

getFiles(filepath, filter, function(err, filenames) {
	if (err) {
		throw err;
	}

	filenames.forEach(function (file) {
		console.log(file);
	});
});

/* Official answer:
var filterFn = require('./solution_filter.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err, list) {
	if (err)
		return console.error('There was an error:', err)

	list.forEach(function (file) {
		console.log(file)
	})
})
*/