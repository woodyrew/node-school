var Path = require('path');
var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

server.views({
	helpersPath: 'helpers',
	engines: {
		html: require('handlebars')
	},
	path: Path.join(__dirname, 'templates')
});

server.route({
	method:'GET',
	path: '/',
	handler: {
		view: "index.html"
	}
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
    
    server.views({
        path: Path.join(__dirname, 'templates'),
        engines: {
            html: require('handlebars')
        },
        helpersPath:  Path.join(__dirname, 'helpers')
    });
    
    server.route({
        method: 'GET',
        path: '/',
        handler: {
            view: 'template.html'
        }
    });
    
    server.start();

 */