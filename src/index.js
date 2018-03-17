import express from "express";
import consign from 'consign'

const app = express();

consign({
    verbose: false
})
    .include('./config/config.js')
    .then('./lib')
    .then('./domain/datasource.js')
    .then('./domain/repositories')
    .then('./http/middlewares')
    .then('./http/controllers')
    .then('./http/routes')
    .then('boot.js')
    .into(app);