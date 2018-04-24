module.exports = (app) => {
  const UserModel = app.domain.datasource.models.user

  class UserRepository {
    static getModel () {
      return UserModel
    }

    static getUserAuth (user, done) {
      return UserModel.findById(user.id)
        .then(user => {
          if (user) {
            return done(null, user)
          }

          return done(null, false)
        })
        .catch(err => done(err, null))
    }

    static validateUser (user, password) {
      return new Promise((resolve, reject) => {
        if (!user) {
          app.logger.error('user invalid')
          return reject(new Error('user invalid'))
        }
        if (!UserModel.isPassword(user.password, password)) {
          app.logger.error('password invalid')
          return reject(new Error('password invalid'))
        }

        return resolve({ id: user.id })
      })
    }

    static login (email, password) {
      return UserModel.findOne({
        where: {
          email
        }
      })
        .then(user => this.validateUser(user, password))
    }

    static getById (id) {
      return UserModel.findOne({
        attributes: ['name', 'email'],
        where: {
          id: id
        }
      })
    }

    static create (name, email, password) {
      return UserModel.findOrCreate({
        where: {
          name: name,
          email: email
        },
        defaults: {
          name: name,
          email: email,
          password: password
        }
      }).spread((user, created) => {
        if (created) {
          throw new Error('User exists')
        }

        return user
      })
    }
  }

  return UserRepository
}
