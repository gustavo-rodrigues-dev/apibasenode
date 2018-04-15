module.exports = {
  development: require(`./config.development`)['db'],
  test: require(`./config.test`)['db'],
  production: require(`./config.production`)['db']
}
