const config = {
  debug: {
    level: 'debug',
    available: true
  },
  secret: 'j~9z{WA1bV?4L:9',
  jwtSession: { session: false },
  port: 3000,
  db: {
    username: 'pguser',
    password: 'pguser',
    database: 'db',
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
    define: {
      underscored: true
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  }
}

module.exports = config
