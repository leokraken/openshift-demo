var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Webhook Updated 2.0!');
});

app.get('/v1', function (req, res) {
  res.send('version 1!');
});

app.get('/error', function (req, res) {
  process.exit(0);
  res.send(a);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
