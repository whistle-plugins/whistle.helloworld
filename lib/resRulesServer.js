const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    console.log('resRulesServer', util.getReqId(req), util.getRuleValue(req), util.getFullUrl(req));
    res.end();
  });
};
