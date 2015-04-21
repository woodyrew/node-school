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
    'use strict';
    
    var _ = require("lodash");
    
    var sorting = function (collection) {
        return _.sortBy(collection, function (item) {
            return -item.quantity;
        });
    
        /* Also possible:
         return _.sortBy(collection,"quantity").reverse();
         * /
    };
    
    module.exports = sorting;

*/