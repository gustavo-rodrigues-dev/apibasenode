import jwt from 'jsonwebtoken'
module.exports = app => {
  const UserRepository = app.domain.repositories.user
  class UserController {
    static async login (req, res) {
      if (!req.body.email || !req.body.password) {
        return res.sendStatus(400)
      }

      let user = null
      const email = req.body.email
      const password = req.body.password

      try {
        user = await UserRepository.login(email, password)
        return res.status(200).json({
          token: jwt.sign(user, app.config.secret)
        })
      } catch (error) {
        app.logger.warn('Invalid user', error)
        return res.sendStatus(401)
      }
    }

    static async getMyInfo (req, res) {
      let user = null
      try {
        user = await UserRepository.getById(req.user.id)
        return res.status(200).json(user)
      } catch (e) {
        return res.status(500)
      }
    }
  }

  return UserController
}
