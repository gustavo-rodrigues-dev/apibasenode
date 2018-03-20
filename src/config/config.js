import winston from 'winston';
const config = require(`./config.${process.env.NODE_ENV || 'development'}.js`);

module.exports = (app) => {
  const debugTransports =  [
    new (winston.transports.File)({ filename: './log/error.log', level: 'error' }),
    new (winston.transports.Console)({
      colorize: true
    })
  ];

  const logger = new (winston.Logger)({
    level: config.debug.level,
    transports: debugTransports
  });

  app.logger = logger;
  app.config = config;

};
