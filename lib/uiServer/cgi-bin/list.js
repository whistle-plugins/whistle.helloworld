
module.exports = (ctx) => {
  const lastId = ctx.query.lastId || (Date.now() - 2000);
  ctx.body = ctx.data.getReqList(lastId);
};
