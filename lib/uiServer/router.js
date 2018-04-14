const bodyParser = require('koa-bodyparser');
const getList = require('./cgi-bin/list');

module.exports = (router) => {
  router.all('/cgi-bin/**', bodyParser());
  router.get('/cgi-bin/list', getList);
};
