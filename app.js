var http = require('http');
var pluginServer = http.createServer();
var uiServer = http.createServer();
var options = {};

pluginServer.listen(8080, function() {
	require('./lib/plugin-server')(pluginServer, options);
});
uiServer.listen(8090, function() {
	require('./lib/ui-server')(uiServer, options);
});

