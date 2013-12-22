"use strict";

var fs = require('fs');

var filepath = process.argv[2];
var filter = new RegExp('.*(\\.' + process.argv[3] + '$)');
// console.log('filter', filter);

var displayFilteredResults = function (element, index, array) {
	if (null !== element.match(filter)) {
		console.log(element);
	}
};

fs.readdir(filepath, function (err, list) {
	if (err) {
		throw err;
	}

	list.forEach(displayFilteredResults);
});

/* Official answer:
var fs = require('fs')
var regex = new RegExp('\\.' + process.argv[3] + '$')

fs.readdir(process.argv[2], function (err, list) {
list.forEach(function (file) {
  if (regex.test(file))
    console.log(file)
})
})
*/