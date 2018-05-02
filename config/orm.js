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
  }


var orm={
    selectAll: function(tableInput, cb){
        var queryString = "Select * From "+tableInput + ";";
        connection.query(queryString, function(err, res){
            if (err) throw err;
            // console.log(res);
                       
            }

    );
    },
    insertOne: function(burgerToInsert, devoured){
        var queryString = "Insert Into burgers (burger_name, devoured) Values (?, ?)";
        connection.query(queryString, [burgerToInsert, devoured], function(err, res){
            if (err) throw err;
            console.log(res);
        }) ;
    },
    updateOne: function(id){
        var queryString = "Update burgers Set devoured = true Where id = ?";
        connection.query(queryString, id, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    }
};

module.exports = orm;