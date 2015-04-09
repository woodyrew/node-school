var Path = require('path');
var fs = require('fs');
var Hapi = require('hapi');
var rot13 = require('rot13-transform');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

function stream_file (request, reply) {
	reply(fs.createReadStream("./public/persuit.txt").pipe(rot13()));
}

server.route({
	method:'GET',
	path: '/',
	handler: stream_file
});

server.start();

/* Official Answer:
    var Fs = require('fs');
    var Hapi = require('hapi');
    var Path = require('path');
    var Rot13 = require('rot13-transform');
    
    
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.route({
        method: 'GET',
        path: '/',
        config: {
            handler: function (request, reply) {
                var thisfile = Fs.createReadStream(Path.join(__dirname, '/input.txt'));
                reply(thisfile.pipe(Rot13()));
            }
        }
    });
    
    server.start();

 */