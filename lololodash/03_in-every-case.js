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
    'use strict';
    
    var _ = require("lodash");
    
    module.exports = function(collection) {
      // add a size attribute to the collection based on the item's population
      // >= 1.0 (million) is "big"
      // >= 0.5 && < 1.0 is "med"
      // < 0.5 is "small"
      return _.forEach(collection, function(item) {
        if (item.population >= 1) {
          item.size = "big";
        } else if(item.population < 0.5) {
          item.size = "small";
        } else {
          item.size = "med";
        }
      });
    };

*/