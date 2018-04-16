const config = {
  debug: {
    level: 'sily',
    available: false
  },
  secret: 'j~9z{WA1bV?4L:6',
  jwtSession: { session: false },
  port: 3000,
  db: {
    username: '',
    password: '',
    database: 'checkin_api',
    host: null,
    port: null,
    dialect: 'sqlite',
    storage: './database/db.test.sqlite',
    sync: {
      force: true
    },
    define: {
      underscored: true
    },
    seederStorage: 'json',
    seederStoragePath: './database/migration.test.json'
  }
}

module.exports = config
