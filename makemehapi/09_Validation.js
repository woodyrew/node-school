var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

function chickens (request, reply) {
	reply('');
}

server.route({
	method:'GET',
	path: '/chickens/{breed}',
	handler: chickens,
	config: {
        validate: {
            params: {
                breed: Joi.string().required()
            }
        }
    }
});

server.start();

/* Official Answer:
    var Hapi = require('hapi');
    var Joi = require('joi');
    
    
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.route({
        method: 'GET',
        path: '/chickens/{breed}',
        config: {
            handler: function (request, reply) {
                reply('You asked for the chicken ' + request.params.breed);
            },
            validate: {
                params: {
                    breed: Joi.string().required()
                }
            }
        }
    });
    
    server.start();
 */