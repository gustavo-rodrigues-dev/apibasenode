import { resolve } from "url";

module.exports = (app) => {
  const UserModel = app.domain.datasource.models.user;

  class UserRepository {
    static getModel(){
      return UserModel
    }

    static getUserAuth(user, done){
      return UserModel.findById(user.id)
        .then(user => {
            if (user) {
                return done(null, user);
            }

            return done(null, false);
        })
        .catch(err => done(err, null));
    }

    static login(email, password){
      return UserModel.findOne({
        where: {
            email
        },
    })
    .then(user => {
        return new Promise((resolve, reject) => {
          if (!user || !UserModel.isPassword(user.password, password)) {
            app.logger.error('password invalid')
            reject('password invalid')
          }

          resolve({ id: user.id });

        })
    });
    }

    static create(name, email, password) {
      return UserModel.findOrCreate({
        where: {
          name: name,
          email: email,
        },
        defaults: {
          name: name,
          email: email,
          password: password
        }
      }).spread((user, created) => {
        if(created){
          throw new Error('User exists');
        }

        return user;
      });
    }
  }

  return UserRepository;
}
