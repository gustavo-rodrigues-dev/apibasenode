module.exports = app => {
  app.listen(app.get('port'), () => app.logger.info('Start api Customer'))
}
