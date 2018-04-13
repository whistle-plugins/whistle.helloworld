const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    res.on('error', util.noop);
    console.log('rulesServer', util.getReqId(req), util.getRuleValue(req), util.getClientIp(req), util.getFullUrl(req));
    res.end();
  });
};

