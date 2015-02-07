var net = require('net');
var socket = new net.Socket();

socket.connect(2323, 'challenge2.airtime.com', function () {

});

socket.on('data', function (data) {
  console.log(data);
});

socket.on('close', function () {

});