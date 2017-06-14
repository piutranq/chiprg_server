
// require
var query = require('../query.js');

// const
var DBPATH = "mongodb://studio2aoe:t1emppa47ssw883ord@localhost:27017/chiprg";

module.exports = function(app)
{
  app.get('/',function(req,res){
    res.send('GAME');
  });

  app.get('/user/:userID',function(req,res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getUser(
          resolve, req.params.userID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.get('/freeranking/:stageID/:userID', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getFreeRanking(
          resolve, req.params.stageID, req.params.userID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.post('/freeranking', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.postFreeRanking(resolve, req.body);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });
  
  app.get('/courseranking/:courseID/:userID', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.getCourseRanking(
          resolve, req.params.courseID, req.params.userID);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });

  app.post('/courseranking', function(req, res){
    query.connectDB(DBPATH).
      then(function(resolve){
        return query.postCourseRanking(resolve, req.body);
      }).
      then(function(resolve){
        res.send(resolve);
      });
  });
};