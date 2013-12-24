"use strict";

var net = require('net');
var moment = require('moment');

var port = process.argv[2];

var server = net.createServer(function (socket) {
	// socket handling logic
	socket.end(moment().format("YYYY-MM-DD HH:mm") + "\n");
});
server.listen(port);
