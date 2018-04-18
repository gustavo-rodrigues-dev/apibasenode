module.exports = app => {
  const healthDontroller = app.http.controllers.health

  /**
   * @api {get} /health Fetch current user data
   * @apiGroup Health
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      status: 200,
   *      message: 'success on conect services'
   *    }
   * @apiErrorExample {json} server error error
   *    HTTP/1.1 500 Internal server error
   *    {
   *      status: 500,
   *      message: 'error o connect services'
   *    }
   */
  app.get('/health', healthDontroller.liveness)
}
