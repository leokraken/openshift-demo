const dgram = require('dgram');
const message = new Buffer("Some bytes");
const client = dgram.createSocket('udp4');

var HOST= 'localhost';

client.send(message, 0, message.length, 8080, HOST, function(err) {
  client.close();
});
