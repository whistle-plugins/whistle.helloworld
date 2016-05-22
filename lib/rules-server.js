var express = require('express');
var app = express();
var path = require('path');
var htdocs = path.join(__dirname, '../public');
var dataEvent = require('./data-event');

/**
 * whistle会通过请求的头部，把配置的值及是否为https或wss请求传递给插件
 */
var RULE_VALUE_HEADER, SSL_FLAG_HEADER;

//获取 pattern helloworld://ruleValue的ruleValue
function getRuleValue(req) {
	return decodeURIComponent(req.headers[RULE_VALUE_HEADER] || '');
}

//判断是否是https请求
function isHttps(req) {
	return !!req.headers[SSL_FLAG_HEADER];
}

function getFullUrl(req, ws) {
	var options = url.parse(req.url);
	var proto = ws ? 'ws' : 'http';
	return proto + (isHttps(req) ? 's' : '') + '://' + req.headers.host + options.path;
}

function initHttpServer(app) {
	app.use(function(req, res) {
		res.end('www.qq.com file://public/index.html filter://\nwww.qq.com rules://ssss\nwss://echo.websocket.org 127.0.0.1\nwss://echo.websocket.org rules://testss');
	});
	
}

module.exports = function(server, options) {
	SSL_FLAG_HEADER = options.SSL_FLAG_HEADER;
	server.on('request', app);
	initHttpServer(app);
};
