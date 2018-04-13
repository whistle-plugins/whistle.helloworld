const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    console.log('statsServer', util.getReqId(req), util.getRuleValue(req), util.getFullUrl(req));
    res.end();
  });
};

