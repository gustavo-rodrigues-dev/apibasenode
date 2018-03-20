const User = app.domain.datasource.models.user;

export function emptyUsers() {
  return User.destroy({
      where: {},
  });
}

export function createUser() {
  return User.create({
      name: 'test',
      email: 'test@test.com',
      password: '123456',
  });
}
