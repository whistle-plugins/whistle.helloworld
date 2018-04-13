const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    res.on('error', util.noop);
    console.log('resStatsServer', util.getReqId(req), util.getRuleValue(req), util.getFullUrl(req));
    res.end();
  });
};

