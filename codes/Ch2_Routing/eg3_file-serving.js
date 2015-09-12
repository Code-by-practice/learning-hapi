/**
 * Description: Serving static files; There's a hapi plugin called `inert` that adds this 
 * functionality to hapi through the use of additional handlers.
 *
 * How to run:
 * node eg3_file-serving.js
 * Open browser -> localhost:9000/file
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
	port: 9000
});

/**
 * Register `inert` plugin with server object;
 */
server.register(require('inert'), function(error) {
	if (error) {
		throw error;
	}

	/**
	 * 1st way: Send the file `src/index.html` content as response to the services;
	 * It does not read `css/styles.css` and `js/scripts.js`; Thus, 404 not found is return;
	 */
	server.route({
		method: 'GET',
		path: '/file',
		handler: function(request, reply) {
			reply.file('src/index-1.html');
		}
	});

	/**
	 * 2nd way: Uncomment below comments to perform file reading with handler object.
	 */
	/*
	server.route({
		method: 'GET',
		path: '/file',
		handler: {
			file: 'src/index-1.html'
		}
	}); */

	server.start(function(error) {
		if (error) {
			throw error;
		}

		console.log("Listening on " + server.info.uri);
	});
});