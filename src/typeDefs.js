module.exports = gql => gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;
