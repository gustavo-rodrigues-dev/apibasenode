module.exports = app => {
  const UserController = app.http.controllers.user;
    app.post('/token', UserController.login);
};
