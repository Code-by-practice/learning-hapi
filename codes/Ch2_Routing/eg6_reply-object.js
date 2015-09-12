/**
 * Description: methods of reply object.
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
	path: '/',
	handler: function(request, reply) {
		/**
		 * Return an empty response; HTTP 200 OK
		 */
		reply(); 
	}
});

server.route({
	method: 'GET',
	path: '/hello',
	handler: function(request, reply) {
		var response = reply('hello world');
		response.statusCode = 303;
		response.charset('utf-8');
	}
});

server.route({
	method: 'GET',
	path: '/redirect/{url}',
	handler: function(request, reply) {
		console.log(request.params.url);
		reply.redirect(request.params.url);
	}
});

server.start(function(error) {
	if (error) {
		throw error;
	}

	console.log("Listening to " + server.info.uri);
});