import jwt from 'jsonwebtoken';
module.exports = (app) => {
  const UserRepository = app.domain.repositories.user;

  class UserController{
    static login(req, res){
      if (!req.body.email || !req.body.password) {
        return res.sendStatus(400);
      }

      const email = req.body.email;
      const password = req.body.password;

      return UserRepository.login(email, password)
        .then(payload => {
          return res
            .status(200)
            .json({
              token: jwt.sign(payload, app.config.secret),
            });
        })
        .catch(error => {
          return res.sendStatus(401);
        })
    }


  }

  return UserController;
};


