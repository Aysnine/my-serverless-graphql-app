module.exports = gql => gql`
  type Book {
    title: String
  }

  type Query {
    books: [Book]
  }
`;
