import express from 'express';
import consign from 'consign';
const path = require('path');

const app = express();

consign({
  cwd: path.join(__dirname, ''),
  extensions: [ '.js' ],
  verbose: false
})
  .include('./config/config.js')
  .then('./domain/datasource.js')
  .then('./domain/repositories/')
  .then('./http/middlewares/')
  .then('./http/controllers')
  .then('./http/routes/')
  .then('boot.js')
  .into(app);

module.exports = app;
