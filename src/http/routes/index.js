module.exports = app => {
  const indexDontroller = app.http.controllers.index

  /**
   * @api {get} / API Status
   * @apiGroup Home
   * @apiSuccess {String} status Api status message
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "status": "API on-line"
   *    }
   */
  app.get('/', indexDontroller.wellcome)
}
