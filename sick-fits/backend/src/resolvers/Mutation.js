const Mutations = {
  async createItem(parent, args, ctx, info) {
    // todo: check if they are logged in

    // ctx.db > it is how we access the db - returns a promise
    const item = await ctx.db.mutation.createItem({
      data: {
        // title: args.title,
        // description: args.description
        ...args
      }
    }, info);

    return item;
  },

  updateItem(parent, args, ctx, info) {
    // first take a copy of the updates
    const updates = { ...args};
    delete updates.id
    return ctx.db.mutation.updateItem({
      data: updates,
      where: {
        id: args.id
      }
    }, info)
  },
  async deleteItem(parent, args, ctx, info) {
    const where = { id: args.id };
    // find the item
    const item = await ctx.db.query.item({ where }, `{ id title }`) 
    // check if they own that item or have permission
    // todo
    // delete item
    return ctx.db.mutation.deleteItem({ where }, info)
  }
};

module.exports = Mutations;
