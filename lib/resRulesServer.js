const { arriveResRulesServer } = require('./data');
const { noop } = require('./util');

module.exports = (server/* , options */) => {
  server.on('request', (req, res) => {
    res.on('error', noop);
    arriveResRulesServer(req);
    res.end();
  });
};
