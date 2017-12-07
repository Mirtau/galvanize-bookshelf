'use strict';
'postgres://localhost/bookshelf_dev'
'postgres://localhost/bookshelf_test'

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/bookshelf_dev'
  },

  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/bookshelf_test'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL }
};
