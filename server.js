var express = require('express');
var app = express();
var server = require('socket.io');
var http = require('http').createServer(app);
app.use('/',express.static(__dirname + '/src'));

var users = [];
var connections = [];

server.listen(process.env.PORT || 3000);
console.log("Server running on Port 3000");