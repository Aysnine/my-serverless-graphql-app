const { SQLDataSource } = require("datasource-sql");

class Database extends SQLDataSource {
  getBooks() {
    return this.knex
      .select("*")
      .from("books");
  }
}

module.exports = Database;
