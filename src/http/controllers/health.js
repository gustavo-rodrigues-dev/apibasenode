module.exports = (app) => {
  class HealthController {
    static liveness (req, res) {
      app.domain.datasource.sequelize.authenticate()
        .then(() => {
          app.logger.info('Connection services has been established successfully.')
          return res.json({
            status: 200,
            message: 'success on conect services'
          })
        })
        .catch(error => {
          app.logger.error('Unable to connect to the database:', error)
          return res
            .sendStatus(500)
            .json({
              status: 500,
              message: 'error o connect services'
            })
        })
    }
  }

  return HealthController
}
