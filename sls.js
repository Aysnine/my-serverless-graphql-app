const { ApolloServer, gql } = require('apollo-server-lambda');
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');

const server = new ApolloServer({ typeDefs: typeDefs(gql), resolvers });

exports.main_handler = server.createHandler();
