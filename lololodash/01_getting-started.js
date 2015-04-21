// include the Lo-Dash library
var _ = require("lodash");

var worker = function(list) {
	return _.where(list, {"active": true});
};

// export the worker function as a nodejs module
module.exports = worker;


/* Official Answer:
    'use strict';
    
    var _ = require("lodash");
    
    var filterwhere = function (item) {
        return _.where(item, {active: true});
    };
    
    module.exports = filterwhere;

*/