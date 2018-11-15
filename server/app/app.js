const express = require('express');
const mongoose = require('mongoose');
const app = express();

const config = require('./config');

app.get('/', function (req, res) {
  res.send('Hello World!')
})

mongoose.connect(config.MONGO_URI);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.listen(config.PORT, function() {
  console.log("App server Listening on port "+(config.PORT))
});
