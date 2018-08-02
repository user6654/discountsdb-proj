const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'f5mB8cYs9H34gNN',
    database: 'discountsdb'
  }
});

module.exports = knex;