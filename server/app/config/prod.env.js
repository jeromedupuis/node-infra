'use strict'
module.exports = {
  PORT: process.env.PORT,
  NODE_ENV: "production",
  MONGO_URI: "mongodb://"+process.env.MONGO_HOST+":"+process.env.MONGO_PORT+"/"+process.env.MONGO_DB
}
