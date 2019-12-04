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
  }
  // createDog(parent, args, ctx, info) {
  //   global.dogs = global.dogs || [];

  //   // create a dog
  //   const newDog = { name: args.name };
  //   global.dogs.push(newDog);
  //   return newDog;
  // }
};

module.exports = Mutations;
