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
*/