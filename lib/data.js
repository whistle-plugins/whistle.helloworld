const reqIdList = [];
const reqData = {};
const MAX_BUF_SIZE = 600;
const MIN_BUF_SIZE = 500;

exports.requestStatsServer = (reqId) => {
  const req = reqData[reqId];
  if (req) {
    req.statsServer = 1;
  } else {
    reqData[reqId] = { requestStatsServer: 1 };
  }
};
