const { forwardTo } = require('prisma-binding')

const Query = {
  // if using the exact same API on the client as on the server
  items: forwardTo('db'),
  item: forwardTo('db'),

  // if not using the exact same thing we need the below code
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
