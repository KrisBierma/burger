//3 files: orm.js passes orm obj to burger.js, which passes burger obj to burger_controller.js, which has the routes

var connection = require("../config/connection.js");

//helps write the query by adding ? (turned to strings)
function printQuestionMarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  };

//converts obj key/value pairs to sql syntax to help with queries
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

//this is passed to the burger obj in burger.js
var orm={
    selectAll: function(tableInput, cb){
        var queryString = "Select * From "+tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    create: function(columns, values, cb){
        var queryString = "Insert Into burgers (";
        queryString+=columns.toString();
        queryString+=") Values (";
        queryString+= printQuestionMarks(values.length);
        queryString+=") ";

        connection.query(queryString, values, function(err, res){
            if (err) throw err;
            cb(res);
        }) ;
    },
    update: function(value, condition, cb){
        var queryString = "Update burgers Set ";
        queryString += objToSql(value);
        queryString+= " Where ";
        queryString+= condition +";";

        connection.query(queryString, function(err, res){
            if (err) throw err;
            cb(res);
        });
    },
    delete: function(condition, cb){
        var queryString = "Delete From burgers Where ";
        queryString+=condition;

        connection.query(queryString, function(err, result){
            if(err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;