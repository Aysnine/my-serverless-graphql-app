module.exports = {
  Query: {
    books: async (_, __, { dataSources }) => {
      const result = await dataSources.db.getBooks();
      return result
    },
  },
}
