const express = require('express');
const app = express();

const config = require('./config');

app.listen(config.PORT, function() {
  console.log("App Api Listening on port "+(config.PORT))
});
