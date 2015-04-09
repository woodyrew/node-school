var Hapi = require('hapi');
var server = new Hapi.Server();


function hello_route(request, reply) {
	
	reply("Hello " + request.params.name);
}


server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	method:'GET',
	path: '/{name}',
	handler: hello_route
});

server.start();
