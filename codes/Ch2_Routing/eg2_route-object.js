/**
 * Description: Adds a route; Get parameter with request params;
 *
 * How to run:
 * node eg2_route-object.js
 * Open browser -> localhost:9000, localhost:9000/user/hegdeashwin, localhost:9000/user/<your-name>
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	port: 9000
});

/**
 * `path` must begin with a '/';
 * `method` can be either string or array; only 'HEAD' method is not supported.
 * `handler` is a function which is used to build the response; It takes 2 arguments request and reply.
 */
server.route({
	method: 'GET',
	path: '/',
	handler: function(request, reply) {
		reply("Hello World");
	}
});

server.route({
	method: 'GET',
	path: '/user/{name}',
	handler: function(request, reply) {
		var name = {
			"username": request.params.name,
			"name": "UnKnown"
		};
		if (request.params.name === 'hegdeashwin') {
			name = {
				"username": request.params.name,
				"name": "Ashwin Hegde"
			};
		}
		reply(name);
	}
});

server.start(function() {
	console.log("Listening on " + server.info.uri);
});