module.exports = app => {
  const UserModel = app.domain.datasource.models.user
  class UserRepository {

    static async getUserAuth (user, done) {
      let response = null

      try {
        response = await UserModel.findById(user.id)
        done(null, response)
      } catch (error) {
        done(error, false)
      }
    }

    static validateUser (user, password) {
      if (!user) {
        return new Error('user invalid')
      }
      if (!UserModel.isPassword(user.password, password)) {
        return new Error('password invalid')
      }

      return { id: user.id }
    }

    static async login (email, password) {
      let user = null

      try {
        user = await UserModel.findOne({
          where: {
            email
          }
        })

        return this.validateUser(user, password)
      } catch (e) {
        return false
      }
    }

    static async getById (id) {
      let user = await UserModel.findOne({
        attributes: ['name', 'email'],
        where: {
          id: id
        }
      })

      return user
    }
  }

  return UserRepository
}
