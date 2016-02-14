var express = require('express');
var app = express();
var path = require('path');
var htdocs = path.join(__dirname, '../public');
var dataEvent = require('./data-event');

/**
 * whistle会通过请求的头部，把配置的值及是否为https或wss请求传递给插件
 */
var SSL_FLAG_HEADER; 

function initHttpServer(app) {
	app.get('/', function(req, res) {
		res.sendFile(path.join(htdocs, 'index.html'));
	});
	
	app.get('/js/*', function(req, res) {
		res.sendFile(path.join(htdocs, 'js/index.js'));
	});
}

function initWSServer(io) {
	io.on('connection', function (socket) {
		dataEvent.on('data', function(data) {
			socket.emit('data', data);
		});
	});
}

module.exports = function(server, options) {
	SSL_FLAG_HEADER = options.SSL_FLAG_HEADER;
	server.on('request', app);
	var io = require('socket.io')(server)
	initHttpServer(app);
	initWSServer(io);
};
