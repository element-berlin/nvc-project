const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./db');

const client = db();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  db.Need.all().then(function(needs) {
    res.render('index.ejs', {
      needs
    });
  });
});

app.post('/need', function(req, res) {
  const need = {
    name: req.body.name.trim(),
    description: req.body.description.trim(),
  };

  db.Need.create(need).then(function(result) {
  });

  res.redirect('back');
});

app.listen(port);
