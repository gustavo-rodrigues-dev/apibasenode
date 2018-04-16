const config = {
  debug: {
    level: 'warn',
    available: true
  },
  secret: 'j~9z{WA1bV?4L:1',
  jwtSession: { session: false },
  port: 3000,
  db: {
    username: '',
    password: '',
    database: 'db',
    host: null,
    port: null,
    dialect: 'sqlite',
    storage: './database/db.homolog.sqlite',
    sync: {
      force: true
    },
    define: {
      underscored: true
    },
    seederStorage: 'json',
    seederStoragePath: './database/migration.homolog.json'
  }
}

module.exports = config
