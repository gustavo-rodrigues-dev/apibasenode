const config = {
  debug: {
    level: 'debug',
    available: true
  },
  secret: 'j~9z{WA1bV?4L:9',
  jwtSession: { session: false },
  port: process.env.APP_PORT || 3000,
  db: {
    username: process.env.PG_USER_NAME,
    password: process.env.PG_PASS,
    database: process.env.PG_DB,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
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
