var express = require('express');//requires express as a module and sets to variable
var body_parser = require('body-parser');//requires the body_parser
var app = express()

app.use('/api', require('../routes/api.js')(express));//sets base of url to the api

var port = 3000; //sets my port to 3000 for server

var server = app.listen(port, function(){
  console.log('Server active on', port);
});//listens for server on port 3000 and prints to log

module.exports = server; //exports server for testing
