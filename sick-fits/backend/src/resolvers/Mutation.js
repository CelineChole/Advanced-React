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
  }
};

module.exports = Mutations;
