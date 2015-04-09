var Hapi = require('hapi');
var server = new Hapi.Server();



server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.route({
	method:'GET',
	path: '/',
	handler: {file: "public/index.html"}
});

server.start();

/* Official Answer:
    var Hapi = require('hapi');
    var Path = require('path');
    
    
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.route({
        method: 'GET',
        path: '/',
        handler: {
            file: Path.join(__dirname, '/index.html')
        }
    });
    
    server.start();

*/