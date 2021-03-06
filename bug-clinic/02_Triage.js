// scenario.js
var fs = require("fs");

var peach = function (obj) {
	// trace the message "traced"
	console.trace("traced");
	// dump obj to stdout
	console.log(obj);
};

var bowser = function (callback) {
	fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
};

var koopa = function (error, file) {
	// handle error by printing something to stderr
	if (error) {
		console.error(error);
	}

	peach(JSON.parse(file));
};

bowser(koopa);


/* Official Answer:
    var fs = require("fs");
    
    var peach = function (obj) {
      console.trace("traced");
      console.log(obj);
    };
    
    var bowser = function (callback) {
      fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
    };
    
    var koopa = function (err, file) {
      if (err) return console.error("Handle your errors folks.");
    
      peach(JSON.parse(file));
    };
    
    bowser(koopa);

*/