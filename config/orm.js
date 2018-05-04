var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  };

  function objToSql(ob) {
    var arr = [];
    for (var key in ob) {
      var value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  };

var orm={
    selectAll: function(tableInput, cb){
        console.log("here");
        var queryString = "Select * From "+tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },
    create: function(columns, values, cb){
        var queryString = "Insert Into burgers (";
        queryString+=columns.toString();
        // console.log(queryString);

        queryString+=") Values (";
        queryString+= printQuestionMarks(values.length);
        // console.log(queryString);

        queryString+=") ";
        console.log(queryString);
        connection.query(queryString, values, function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res);
        }) ;
    },
    update: function(value, condition, cb){
        console.log(value, condition);
        var queryString = "Update burgers Set ";
        queryString += objToSql(value);
        queryString+= " Where ";
        queryString+= condition +";";
        console.log(queryString);
        connection.query(queryString, function(err, res){
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    }
};

module.exports = orm;