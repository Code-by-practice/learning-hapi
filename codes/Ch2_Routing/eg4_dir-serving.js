/**
 * Description: Serving static directory; There's a hapi plugin called `inert` that adds this 
 * functionality to hapi through the use of additional handlers.
 *
 * How to run:
 * node eg4_dir-serving.js
 * Open browser -> localhost:9000/dir
 *
 * To terminate the program use Ctrl+C / Cmd+C
 */

var Hapi = require('hapi');
var path = require('path');

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
	 * Send the file `src/index.html` content as response to the services;
	 * It does not read `css/styles.css` and `js/scripts.js`; Thus, 404 not found is return;
	 *
	 * listing will turn on/off the files directory listing;
	 * By default Hapi will read for index.html in src directory; but renaming it to index-1.html
	 * will list of the files within that directory.
	 *
	 * Directory serving will load all references specified in index-1.html like css and js files. 
	 */
	server.route({
		method: 'GET',
		path: '/dir/{params*}',
		handler: {
			directory: {
				path: './src/',
				listing: true		// Not recommended; just to demo purpose
			}
		}
	});

	server.start(function(error) {
		if (error) {
			throw error;
		}

		console.log("Listening on " + server.info.uri);
	});
});