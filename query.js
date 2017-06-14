var Query = {};
var MongoClient = require('mongodb').MongoClient;
var Db = require('mongodb').Db;
var Server = require('mongodb').Server;

// [CONNECTION]
Query.connectDB = function(dbPath){
  return new Promise(function(resolve, reject){
    MongoClient.connect(dbPath, function(err, res){
      if(err) throw err;
      resolve(res);
    });
  });
};

// [COLLECTION USER]
Query.getUser = function(db){
  return new Promise(function(resolve, reject){
    db.collection("userdata").find({}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};


// [COLLECTION freeranking]
Query.getFreeRanking = function(db){
  return new Promise(function(resolve, reject){
    db.collection("freeranking").find({}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

Query.getFreeRankingStage = function(db, _stageID){
  return new Promise(function(resolve, reject){
    db.collection("freeranking").find({stageID: _stageID}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

Query.getFreeRankingUser = function(db, _userID){
  return new Promise(function(resolve, reject){
    db.collection("freeranking").find({userID: _userID}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

Query.getFreeRankingStageUser = function(db, _stageID, _userID){
  return new Promise(function(resolve, reject){
    db.collection("freeranking").find({stageID: _stageID, userID: _userID}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

Query.postFreeRanking = function(db, body){
  return new Promise(function(resolve, reject){
    var date = new Date();
    var object = {
      userID: body.userID,
      userType: body.userType,
      stageID: body.stageID,
      score: body.score,
      date: date.getTime()
    };
    db.collection("freeranking").insert(object, function(err, res){
    if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

// [COLLECTION courseranking]
Query.getCourseRanking = function(db){
  return new Promise(function(resolve, reject){
    db.collection("courseranking").find({}).toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

Query.postCourseRanking = function(db, body){
  return new Promise(function(resolve, reject){
    var date = new Date();
    var object = {
      userID: body.userID,
      userType: body.userType,
      courseID: body.courseID,
      score: body.score,
      date: date.getTime()
    };
    db.collection("courseranking").insert(object, function(err, res){
    if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};

// [COLLECTION stagedata]

// [COLLECTION coursedata]

module.exports = Query;