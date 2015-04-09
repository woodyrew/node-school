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


/* Official Answer:
    var Hapi = require('hapi');
    
    
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply('Hello Hapi');
        }
    });
    
    server.start();
*/