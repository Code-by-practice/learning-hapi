/**
 * Description: Display welcome message on browser
 *
 * How to run:
 * node eg1_hello-world.js
 * Open browser -> localhost:9000/hello
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');

/**
 * Create a server object.
 */
var server = new Hapi.Server();

/**
 * Access connection method and pass on port on which server can listen the request and response
 */
server.connection({
	port: 9000
});

/**
 * Set hello 'GET' route and response with 'hello world' string.
 */
server.route({
	path: '/hello',
	method: 'GET',
	handler: function(request, reply) {
		reply('Hello World');
	}
});

/**
 * Start the server
 */
server.start(function() {
	console.log('Listening on ' + server.info.uri);
});