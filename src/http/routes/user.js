module.exports = app => {
  const UserController = app.http.controllers.user;

  app.route('/user')
  .all(app.http.middlewares.security.authenticate())
  /**
   * @api {get} /user Fetch current user data
   * @apiGroup User
   * @apiHeaderExample {json} Header
   *    {"Authorization": "bearer token.xpto"}
   * @apiSuccessExample {json} Success
   *    HTTP/1.1 200 OK
   *    {
   *      "name": "Your name",
   *      "email": "your.email@test.com"
   *    }
   * @apiErrorExample {json} Authentication error
   *    HTTP/1.1 401 Unauthorized
   */
  .get(UserController.getMyInfo);
};
