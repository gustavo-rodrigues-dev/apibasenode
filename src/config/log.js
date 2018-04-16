import winston from 'winston'

module.exports = (config) => {
  const debugTransports = [
    new (winston.transports.File)({ filename: './log/error.log', level: 'error' }),
    new (winston.transports.Console)({
      colorize: true
    })
  ]

  const logger = new (winston.Logger)({
    level: config.debug.level,
    transports: debugTransports
  })

  return logger
}
