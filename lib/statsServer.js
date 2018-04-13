const getUtil = require('./util');

module.exports = (server, options) => {
  const util = getUtil(options);

  server.on('request', (req, res) => {
    console.log('statsServer', req.url, util.getReqId(req));
    res.end();
  });
};

