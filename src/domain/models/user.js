import PasswordFactory from '../../lib/auth/password.factory'

module.exports = function (sequelize, DataTypes) {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'user',
    hooks: {
      beforeCreate: user => {
        const newUser = user
        newUser.password = PasswordFactory.create(newUser.password)
      }
    }
  })

  user.associate = (models) => {}
  user.isPassword = (encPass, pass) => PasswordFactory.compare(pass, encPass)

  return user
}
