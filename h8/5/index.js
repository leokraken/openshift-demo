var express = require('express');
var uuid = require('uuid');
var app = express();

var r = uuid.v4();

app.get('/', function (req, res) {
  res.send(r);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080...!');
});
