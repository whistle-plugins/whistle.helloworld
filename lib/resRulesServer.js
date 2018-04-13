const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    console.log('resRulesServer', req.url, util.getReqId(req));
    res.end();
  });
};

