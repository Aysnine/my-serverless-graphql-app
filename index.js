const { ApolloServer, gql } = require('apollo-server');
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');

const server = new ApolloServer({ typeDefs: typeDefs(gql), resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
