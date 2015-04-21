// include the Lo-Dash library
var _ = require("lodash");

var worker = function(list) {
	return _.sortBy(list, function (value) {
		return +value['quantity'] * -1;
	});
};

// export the worker function as a nodejs module
module.exports = worker;


/* Official Answer:

*/