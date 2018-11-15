'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL: `"${process.env.HOST}:8082"`,
  CLIENT_URL: `"${process.env.HOST}:${process.env.PORT}"`
});
