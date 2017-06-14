
// require
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

// const
var DBPATH = "mongodb://studio2aoe:t1emppa47ssw883ord@localhost:27017/chiprg";

module.exports = function(app)
{
  
  app.get('/',function(req,res){
    res.send('GAME');
  });

  app.get('/user',function(req,res){
    promiseDBConnect(DBPATH).
      then(function(resolve) { return promiseGetUser(resolve); }).
      then(function(resolve) { res.send(resolve);});
  });

  app.get('/freeranking', function(req, res){
    res.send('GET /freeranking');
  });

  app.post('/freeranking', function(req, res){
    console.log(req);
    res.send('POST /freeranking');
  });
};

var promiseDBConnect = function(dbPath){
  return new Promise(function(resolve, reject){
    MongoClient.connect(dbPath, function(err, res){
      if(err) throw err;
      resolve(res);
    });
  });
};

var promiseGetUser = function(db){
  return new Promise(function(resolve, reject){
    db.collection("userData").find({}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};