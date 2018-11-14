const express = require('express');
const app = express();

const config = require('./config');

app.listen(config.PORT, function() {
  console.log("Admin Api Listening on port "+(config.PORT))
});
