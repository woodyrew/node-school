var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	method:'GET',
	path: '/foo/bar/baz/{file}',
	handler: {
		directory: {
			path: Path.join(__dirname, "./public/")
		}
	}
});

server.start();