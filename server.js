/* global process */
var express = require('express');
var bodyParser = require('body-parser');
/*var Customer = './Customer/Customer.controller';*/
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  alert('We have a connection!');
  socket.on("new-message", function(msg){
    console.log(msg);
    io.emit("receive-message", msg);
  })
  socket.on("test", function () {
    console.log("mounted");
  })
});
app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));
app.use('/',express.static(__dirname + '/src'));
/*app.use('/api/customer', Customer);*/

new 
app.listen(app.get('port'), () => {
  console.log('Example app listening on port ' + app.get('port') + '!');
});
