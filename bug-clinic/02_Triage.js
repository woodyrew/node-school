    // scenario.js
    var fs = require("fs");

    var peach = function (obj) {
      // trace the message "traced"
      // dump obj to stdout
    };

    var bowser = function (callback) {
      fs.readFile(process.argv[2], {encoding : "utf8"}, callback);
    };

    var koopa = function (error, file) {
      // handle error by printing something to stderr

      peach(JSON.parse(file));
    };

    bowser(koopa);


/* Official Answer:

*/