var Query = function() {
  this.postFreeRanking = function(_user, _type, _stage, _score){
    var obj = {
      userID: _user,
      userType: _type,
      stageID: _stage,
      score: _score
    };
    console.log(obj);
    $.post("freeranking",obj,
      function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
      });
  }

  this.postCourseRanking = function(_user, _type, _course, _score){
    var obj = {
      userID: _user,
      userType: _type,
      courseID: _course,
      score: _score
    };
    console.log(obj);
    $.post("courseranking",obj,
      function(data, status){
        console.log("Data: " + data + "\nStatus: " + status);
      });
  }

  this.getFreeRanking = function(_stageID, _userID, _limit){
    var queryString = "freeranking"
    if(_stageID != undefined){
      queryString+="?stageID="+_stageID;
      if(_userID != undefined){
        queryString+="&userID="+_userID;
        if(_limit != undefined){
          queryString+="&limit="+_limit;
        }
      }
    }
    else{
      if(_userID != undefined){
        queryString+="?userID="+_userID;
        if(_limit != undefined){
          queryString+="&limit="+_limit;
        }
      }
    }
    console.log(queryString);
    $.get(queryString, 
      function(data, status){
        console.log(data);
      });
  }

  this.getCourseRanking = function(_courseID, _userID, _limit){
    var queryString = "courseranking"
    if(_courseID != undefined){
      queryString+="?courseID="+_courseID;
      if(_userID != undefined){
        queryString+="&userID="+_userID;
        if(_limit != undefined){
          queryString+="&limit="+_limit;
        }
      }
    }
    else{
      if(_userID != undefined){
        queryString+="?userID="+_userID;
        if(_limit != undefined){
          queryString+="&limit="+_limit;
        }
      }
    }
    console.log(queryString);
    $.get(queryString, 
      function(data, status){
        console.log(data);
      });
  }
};