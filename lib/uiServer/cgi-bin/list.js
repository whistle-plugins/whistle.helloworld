
module.exports = (ctx) => {
  const lastId = ctx.query.lastId;
  ctx.body = ctx.data.getReqList(lastId);
};
