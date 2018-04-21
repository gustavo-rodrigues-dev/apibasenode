module.exports = (app) => {
  class HealthController {
    static liveness (req, res, next) {
      app.domain.datasource.sequelize.authenticate()
        .then(() => {
          app.logger.info('Connection services has been established successfully.')
          return res.json({
            status: 200,
            message: 'success on conect services'
          })
        })
        .catch(error => next(error))
    }
  }

  return HealthController
}
