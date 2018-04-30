import jwt from 'jsonwebtoken'
module.exports = app => {
  const UserRepository = app.domain.repositories.user
  class UserController {
    static login (req, res) {
      if (!req.body.email || !req.body.password) {
        return res.sendStatus(400)
      }

      const email = req.body.email
      const password = req.body.password

      return UserRepository.login(email, password)
        .then(payload => {
          return res.status(200).json({
            token: jwt.sign(payload, app.config.secret)
          })
        })
        .catch(error => {
          app.logger.warn('Invalid user', error)
          return res.sendStatus(401)
        })
    }

    static async getMyInfo (req, res) {
      let user = null
      try {
        user = await UserRepository.getById(req.user.id)
        return res.status(200).json(user)
      } catch (e) {
        res.status(500)
      }
    }
  }

  return UserController
}
