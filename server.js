var express = require('express');
var app = express();
var router = require('./router/main')(app);

var server = app.listen(21003, function(){
  console.log("Express server has started on port 21003")
});

/*
var _promise = function(param){
	return new Promise(function(resolve, reject){
    console.log('_promise Start');
		setTimeout(function(){
			resolve('OK');
    }, 3000);
  });
};

_promise(true).then(function(resolve){
  console.log('YEAH' + resolve)
});
*/