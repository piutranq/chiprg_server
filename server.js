var express = require('express');
var app = express();
var router = require('./router/main')(app);

var server = app.listen(21003, function(){
  console.log("Express server has started on port 21003");
});