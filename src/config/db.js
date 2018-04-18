module.exports = {
  local: require(`./config.local`)['db'],
  development: require(`./config.development`)['db'],
  test: require(`./config.test`)['db'],
  production: require(`./config.production`)['db']
}
