var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

function login (request, reply) {
	reply('login successful');
}

server.route({
	method:'POST',
	path: '/login',
	handler: login,
	config: {
        validate: {
            payload: Joi.object({
                isGuest: Joi.boolean(),
                username: Joi.string().when('isGuest', {is: false, then: Joi.required()}),
                accessToken: Joi.string().alphanum(),
                password: Joi.string().alphanum(),
            })
			.options({allowUnknown: true})
			.without('password', 'accessToken')

        }
    }
});

server.start();

/* Official Answer:

 */