var Hapi = require('hapi');
var server = new Hapi.Server();


function hello_hapi(request, reply) {
	
	//request has all information
	//reply handles client response

	reply("Hello Hapi");
}



server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({path: '/', method:'GET', handler: hello_hapi});

server.start();
