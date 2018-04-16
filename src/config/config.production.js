const config = {
  debug: {
    level: 'error',
    available: true
  },
  secret: 'j~9z{WA1bV?4L:7',
  jwtSession: { session: false },
  port: 3000,
  db: {
    username: '',
    password: '',
    database: 'checkin_api',
    host: null,
    port: null,
    dialect: 'sqlite',
    storage: './database/db.production.sqlite',
    sync: {
      force: true
    },
    define: {
      underscored: true
    },
    seederStorage: 'json',
    seederStoragePath: './database/migration.prodution.json'
  }
}

module.exports = config
