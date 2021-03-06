var Hapi = require('hapi');
var Joi = require('joi');

var server = new Hapi.Server();

server.connection({
	host: 'localhost',
	port: Number(process.argv[2] || 8080)
});

function base64json (obj) {
	return JSON.stringify(obj).toString("base64");
}

function set_cookie (request, reply) {
	var cookie_content = {
		key: 'makemehapi'
	};

	server.state('session', {
		path: '/{path*}',
		domain: 'localhost',
		ttl: 10,
		encoding: 'base64json'
	});


	reply("Yeah!  Settin' dem sweet tasty cookies")
		.state('session', cookie_content);

}

server.route({
	method:'GET',
	path: '/set-cookie',
	config: {
		handler: set_cookie,
		state: {
			parse: true,
			failAction: 'log'
		}
	}
});

server.route({
	method: 'GET',
	path: '/check-cookie',
	config: {
		state: {
			parse: true,
			failAction: 'log'
		},
		handler: function (request, reply) {
			var session = request.state.session;

			reply({
				statusCode: 400,
				error: "Bad Request",
				message: "Invalid cookie value"
			});
		}
	}
})

server.start();

/* Official Answer:
    var Hapi = require('hapi');
    
    
    var server = new Hapi.Server();
    
    server.connection({
        host: 'localhost',
        port: Number(process.argv[2] || 8080)
    });
    
    server.state('session', {
      path: '/{path*}',
      encoding: 'base64json',
      ttl: 10,
      domain: 'localhost'
    });
    
    server.route(
      {
        method: 'GET',
        path: '/set-cookie',
        handler: function (request, reply) {
          return reply({
            message : 'success'
          }).state('session', {
            key : 'makemehapi'
          });
        },
        config: {
          state: {
            parse: true,
            failAction: 'log'
          }
        }
      }
    );
    
    server.route(
      {
        method: 'GET',
        path: '/check-cookie',
        handler: function (request, reply) {
          var session = request.state.session;
          var result;
          if (session) {
            result = {
              user : 'hapi'
            };
          } else {
            result = new Hapi.error.unauthorized('Missing authentication');
          }
          reply(result);
        }
      }
    );
    
    server.start();
 */