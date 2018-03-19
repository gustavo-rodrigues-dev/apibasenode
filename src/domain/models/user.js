import {Model} from 'sequelize';
import PasswordFactory from '../../lib/auth/password.factory'

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    set password(value) {
      this.password = PasswordFactory.create(value);
    }

    static associate(models) {

    }

    static isPassword(encPass, pass){
      return PasswordFactory.compare(pass, encPass)
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    sequelize
  }
)
  return User
}
