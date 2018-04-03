// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/dbname-dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/dbname-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
