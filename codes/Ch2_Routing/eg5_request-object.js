/**
 * Description: methods of request object.
 *
 * How to run:
 * node eg5_request-object.js
 * Open browser -> 
 * Try 	localhost:9000/user/<your-name>
 *		localhost:9000/user?showMore=true
 *		localhost:9000/stateInfo
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	port: 9000
});

server.route({
	method: 'GET',
	path: '/user/{name}',
	handler: function(request, reply) {
		reply(request.params.name);
	}
});

server.route({
	method: 'GET',
	path: '/user',
	handler: function(request, reply) {
		reply(request.query.showMore);
	}
});

server.route({
	method: 'GET',
	path: '/stateInfo',
	handler: function(request, reply) {
		reply(request.info);
	}
});

server.start(function(error) {
	if (error) {
		throw error;
	}

	console.log("Listening to " + server.info.uri);
});