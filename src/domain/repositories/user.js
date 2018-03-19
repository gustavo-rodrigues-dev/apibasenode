module.exports = (app) => {
  const UserModel = app.domain.datasource.models.User;

  class UserRepository {
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
}
