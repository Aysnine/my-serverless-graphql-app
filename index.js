const { ApolloServer, gql } = require('apollo-server-lambda');
const resolvers = require('./src/resolvers');
const typeDefs = require('./src/typeDefs');
const Database = require("./src/database");

const db = new Database({
  client: "mysql",
  connection: {
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  }
});

const server = new ApolloServer({
  typeDefs: typeDefs(gql),
  resolvers,
  dataSources: () => ({ db })
});

const handler = server.createHandler()

exports.main_handler = async (...args) => {
  const result = await handler(...args);
  return result.body;
};
