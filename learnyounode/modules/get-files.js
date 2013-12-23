"use strict";

var fs = require('fs')

// Array Remove - By John Resig (MIT Licensed)
Array.prototype.remove = function(from, to) {
	var rest = this.slice((to || from) + 1 || this.length);
	this.length = from < 0 ? this.length + from : from;
	return this.push.apply(this, rest);
};

/**
 * gets files in a directory and filters them.
 * 
 * @param  {string}   directoryPath
 * @param  {string}   filter          [file exension filter string]
 * @param  {Function} callback
 * 
 * @return {void}
 */
var getFiles = function getFiles (directoryPath, filter, callback) {
	var regex = new RegExp('(\\.' + filter + '$)');
	//console.log('regex', regex);

	fs.readdir(directoryPath, function (err, files) {
		if (err) {
			return callback(err);
		}

		// Y this no work?
		// console.log('files 1:', files.length, files);
		// for (var i = 0; i < files.length; i++) {
			
		// 	console.log('file', i, files[i]);//, 'matched', matched);
		// 	var matched = regex.test(files[i]);
		// 	console.log('matched', matched);
		// 	if (false === matched) {
		// 		files.remove(i);
		// 	}
		// };

		var filtered = files.filter(function(item){
		    return regex.test(item);
		});
		
		return callback(null, filtered);
	});
};

module.exports = getFiles;

/* Official answer:

var fs = require('fs')
    
module.exports = function (dir, filterStr, callback) {
	var regex = new RegExp('\\.' + filterStr + '$')

	fs.readdir(dir, function (err, list) {
		if (err)
			return callback(err)

		list = list.filter(function (file) {
			return regex.test(file)
		})

		callback(null, list)
	})
}
*/