const express = require('express');
const app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('<h1>Hello element</h1>');
});

app.listen(port);
