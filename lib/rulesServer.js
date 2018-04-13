const { arriveRulesServer } = require('./data');
const { noop } = require('./util');

module.exports = (server/* , options */) => {
  server.on('request', (req, res) => {
    res.on('error', noop);
    arriveRulesServer(req);
    res.end();
  });
};
