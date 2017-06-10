module.exports = function(app)
{
  app.get('/',function(req,res){
    res.send('Hello');
  });
  app.get('/user',function(req,res){
    var ret;
    getUser().then(function(resolve){
      ret = resolve;
      res.send(ret);
    });
  });
}

var getUser = function(param){
  return new Promise(function(resolve, reject){
    var MongoClient = require('mongodb').MongoClient;
    var dbPath = "mongodb://localhost:27017/chiprg";
    MongoClient.connect(dbPath, function(err, db){
      if(err) throw err;
      console.log("Database Connected");
      db.collection("userData").find({}).toArray(function(err, res){
        if(err) throw err;
        resolve(res);
      });
      db.close();
    });
  });
};
