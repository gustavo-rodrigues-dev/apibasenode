const config = require(`./config.${process.env.NODE_ENV || 'development'}.js`)
const logger = require('./log')(config)

module.exports = (app) => {
  app.logger = logger
  app.config = config
}
