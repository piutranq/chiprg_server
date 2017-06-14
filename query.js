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
    db.collection("userdata").find({})
    .toArray(function(err, res){
      if(err) throw err;
      resolve(res);
      db.close();
    });
  });
};


// [COLLECTION freeranking]
Query.getFreeRanking = function(db, _stageID, _userID){
  return new Promise(function(resolve, reject){
    var findMethod = function(){
      if(_stageID == "UNDEFINED" && _userID == "UNDEFINED"){
        return {};
      }
      if(_stageID == "UNDEFINED"){
        return {userID: _userID};
      }
      if(_userID == "UNDEFINED"){
        return {stageID: _stageID};
      }      
      return {userID: _userID, stageID: _stageID};
    };

    var sortMethod = function(){
      return {score:-1, date:1};
    };

    db.collection("freeranking")
      .find(findMethod())
      .sort(sortMethod())
      .toArray(function(err, res){
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
    db.collection("freeranking")
      .insert(object, function(err, res){
      if(err) throw err;
        resolve(res);
        db.close();
      });
  });
};

// [COLLECTION courseranking]
Query.getCourseRanking = function(db, _courseID, _userID){
  return new Promise(function(resolve, reject){
    var findMethod = function(){
      if(_courseID == "UNDEFINED" && _userID == "UNDEFINED"){
        return {};
      }
      if(_courseID == "UNDEFINED"){
        return {userID: _userID};
      }
      if(_userID == "UNDEFINED"){
        return {courseID: _courseID};
      }      
      return {userID: _userID, courseID: _courseID};
    };

    var sortMethod = function(){
      return {score:-1, date:1};
    };

    db.collection("courseranking")
      .find(findMethod())
      .sort(sortMethod())
      .toArray(function(err, res){
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
    db.collection("courseranking")
      .insert(object, function(err, res){
      if(err) throw err;
        resolve(res);
        db.close();
      });
  });
};

// [COLLECTION stagedata]

// [COLLECTION coursedata]

module.exports = Query;