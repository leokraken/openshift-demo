var express = require('express');
var app = express();
var request = require('request');

//service
var host = 'v2';


app.get('/interact', function (req, res) {
	request(host, function (error, response, body) {
	  if(!error){
	      res.send(body)
	  }else{
	      res.send(error);
	  }
	})
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
