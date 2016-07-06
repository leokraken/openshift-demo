var express = require('express');
var app = express();
var request = require('request');

//service
var host = 'http://' + process.env.V2_PORT_8080_TCP_ADDR + ':' + process.env.V2_SERVICE_PORT_8080_TCP;


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
