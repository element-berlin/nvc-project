const express = require('express');
const app = express();

const db = require('./db');

let name = 'dummy';

db().then(function() {
  db.Name.create({
    name: 'Clara',
  }).then(function() {
    db.Name.all().then(function(names) {
      console.log(names);
      name = names[0].name;
    });
  });
});


// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.render('index.ejs', {
    name,
  });
});

app.listen(port);
