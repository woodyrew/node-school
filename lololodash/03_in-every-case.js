// include the Lo-Dash library
var _ = require("lodash");

var worker = function(list) {
	return _.forEach(list, function (value, key, collection) {
		var size = 'small';
		size = (value.population > 0.5) ? 'med' : size;
		size = (value.population > 1) ? 'big' : size;

		collection[key]['size'] = size;
	});
};

// export the worker function as a nodejs module
module.exports = worker;


/* Official Answer:

*/