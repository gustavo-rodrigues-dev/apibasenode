module.exports = app => {
  class HealthController {
    static async liveness (req, res, next) {
      try {
        await app.domain.datasource.sequelize.authenticate()
        app.logger.info(
          'Connection services has been established successfully.'
        )
        return res.json({
          status: 200,
          message: 'success on conect services'
        })
      } catch (error) {
        return next(error)
      }
    }
  }

  return HealthController
}
