const util = require('./util');

let reqIdList = [];
const reqData = {};
const MAX_BUF_SIZE = 600;
const MIN_BUF_SIZE = 500;
const COUNT = 50;

const updateStatus = (req, serverName) => {
  const reqId = util.getReqId(req);
  const item = reqData[reqId];
  if (item) {
    item[serverName] = 1;
    item.method = util.getMethod(req);
    item.url = util.getFullUrl(req);
    item.clientIp = util.getClientIp(req);
    item.ruleValue = util.getRuleValue(req);
  } else {
    reqData[reqId] = { [serverName]: 1 };
    reqIdList.push(reqId);
    const len = reqIdList.length - MAX_BUF_SIZE;
    if (len > 0) {
      const removedIds = reqIdList.slice(0, len);
      removedIds.forEach(id => delete reqData[id]);
      reqIdList = reqIdList.slice(len, MIN_BUF_SIZE);
    }
  }
  item.statusCode = util.getStatusCode(req);
  item.serverIp = util.getServerIp(req);
};

exports.arriveStatsServer = req => updateStatus(req, 'statsServer');
exports.arriveResStatsServer = req => updateStatus(req, 'resStatsServer');
exports.arriveRulesServer = req => updateStatus(req, 'rulesServer');
exports.arriveServer = req => updateStatus(req, 'server');
exports.arriveResRulesServer = req => updateStatus(req, 'resRulesServer');
exports.arriveTunnelRulesServer = req => updateStatus(req, 'tunnelRulesServer');
exports.arriveTunnelServer = req => updateStatus(req, 'tunnelServer');

exports.getReqList = (startReqId, count) => {
  count = count > 0 ? count : COUNT;
  const index = reqIdList.indexOf(startReqId) + 1;
  const result = reqIdList.slice(index, index + count);
  return result.map(id => reqData[id]);
};