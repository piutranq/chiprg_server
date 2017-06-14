
// require
var query = require('../query.js');

// const
var DBPATH = "mongodb://studio2aoe:t1emppa47ssw883ord@localhost:27017/chiprg";

module.exports = function(app)
{
  app.get('/',function(req,res){
    res.send('GAME');
  });

  app.get('/user/all',function(req,res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getUser(resolve);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.get('/freeranking/all', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getFreeRanking(resolve);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.get('/freeranking/stage/:stageID', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getFreeRankingStage(resolve, req.params.stageID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.get('/freeranking/user/:userID', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getFreeRankingUser(resolve, req.params.userID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.get('/freeranking/stageuser/:stageID/:userID', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getFreeRankingStageUser(
          resolve, req.params.stageID, req.params.userID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.post('/freeranking', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){ 
        console.log(req.body);
        return query.postFreeRanking(resolve, req.body);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });
};