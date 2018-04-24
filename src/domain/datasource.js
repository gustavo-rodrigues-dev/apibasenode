import Sequelize from 'sequelize'
import fs from 'fs'
import path from 'path'

let datasource = null

module.exports = (app) => {
  if (datasource !== null) return datasource
  const config = app.config
  const Op = Sequelize.Op
  const sequelize = new Sequelize(
    config.db.database,
    config.db.username,
    config.db.password,
    {
      host: config.db.host,
      dialect: config.db.dialect,
      define: config.db.define,
      storage: config.db.storage,
      operatorsAliases: Op,
      sync: config.db.sync,
      logging: (app.config.debug.available)
        ? (msg, queryExecutionTime) => {
          let logData = {
            query: msg
          }
          if (app.config.debug.available) {
            logData.queryExecutionTime = queryExecutionTime + ' milliseconds'
          }
          if (queryExecutionTime > app.config.debug.queryMaxTimeToNotice) {
            logData.msg = 'SLOW QUERY'
            app.logger.warn(logData)
          } else {
            logData.msg = 'GOOD QUERY'
            app.logger.info(logData)
          }
        }
        : false,
      benchmark: app.config.debug.available
    }
  )

  sequelize.authenticate()
    .then(() => app.logger.info('Connection has been established successfully.'))
    .catch(err => app.logger.error('Unable to connect to the database:', err))

  datasource = {
    sequelize,
    Sequelize,
    models: {}
  }

  const dir = path.join(__dirname, './models')

  fs.readdirSync(dir).forEach(file => {
    const modelDir = path.join(dir, file)
    const model = sequelize.import(modelDir)

    if (model) {
      datasource.models[model.name] = model
    }
  })

  Object.keys(datasource.models).forEach(key => {
    if ('associate' in datasource.models[key]) {
      datasource.models[key].associate(datasource.models)
    }
  })

  return datasource
}
