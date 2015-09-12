/**
 * Description: Log client (browser) request
 *
 * How to run:
 * node eg1_log-client-request.js
 * Open browser -> 
 * Try localhost:9000, localhost:9000/hello, localhost:9000/users and see the logs on console
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	port: 9000
});

/**
 * Call ext method on the server object. Short form of extension.
 * It register another function, pass an argument when a particular events get fired.
 * 
 * Hapi provides few events onRequest, onPreAuth, onPostAuth, onPreHandler, onPostHandler, onPreResponse.
 * 
 * Syntax:
 * server.ext(<event-name>, function(<request-object>, <reply-object>) { ... });
 *
 * We are going to use onRequest event to log the client request.
 */
server.ext('onRequest', function(request, reply) {
	console.log('Request received: ' + request.path);
	reply.continue();
});

server.start(function() {
	console.log("Listening on " + server.info.uri);
});