var initPluginServer = require('./lib/plugin-server');
var initUIServer = require('./lib/ui-server');

module.exports = function(server, options) {
	initPluginServer(server, options);
};

module.exports.uiServer = function(server, options) {
	initUIServer(server, options);
};