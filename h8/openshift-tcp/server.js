var PORT = 8080;
var HOST = '0.0.0.0';

var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Echo server\r\n');
	socket.pipe(socket);

 socket.on('data', function (data) {
    console.log(data);
  });

});

server.listen(PORT, HOST);
