'use strict'
var PasswordFactory = require('../../src/lib/auth/password.factory')
var moment = require('moment')

module.exports = {
  up: function (queryInterface) {
    return queryInterface.bulkInsert('user', [
      {
        name: 'adm',
        email: 'adm@adm.com',
        password: PasswordFactory.create('123456'),
        created_at: moment().format('YYYY-MM-DD h:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD h:mm:ss')
      }
    ])
  },

  down: function (queryInterface) {
    return queryInterface.bulkDelete('user', [
      {
        email: 'adm'
      }
    ])
  }
}
