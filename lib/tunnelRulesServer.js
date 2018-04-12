
module.exports = (server, options) => {
  server.on('request', (req, res) => {
    console.log('tunnelRulesServer', req.headers.host, req.url);
    res.end();
  });
};

