module.exports = app => {
  const UserController = app.http.controllers.user
  /**
   * @api {post} /token Get a Token
   * @apiGroup Athorization
   * @apiParam {String} email User email
   * @apiParam {String} password User password
   * @apiParamExample {json} entry
   *    {
   *      "email": "steve.woz@apple.com",
   *      "password": "123456"
   *    }
   * @apiSuccess {String} token Authenticated user token
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "token": "token.xpto"
   *    }
   * @apiErrorExample {json} Authentication error
   *    HTTP/1.1 401 Unauthorized
   *
   * @apiErrorExample {json} Invalid parameters
   *    HTTP/1.1 400 Bad Request
   */
  app.post('/token', UserController.login)
}
