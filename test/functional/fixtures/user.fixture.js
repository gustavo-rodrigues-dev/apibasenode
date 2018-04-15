const User = app.domain.datasource.models.user;

export function emptyUsers() {
  return User.destroy({
      where: {},
  });
}

export function invalidateTable() {
  return app.domain.datasource.sequelize.queryInterface.renameColumn(User.getTableName() , 'name', 'invalidate');
}

export function validateTable() {
  return app.domain.datasource.sequelize.queryInterface.renameColumn(User.getTableName(), 'invalidate', 'name');
}

export function createUser() {
  return User.create({
      name: 'test',
      email: 'test@test.com',
      password: '123456',
  });
}
