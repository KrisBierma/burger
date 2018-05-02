var connection = require("./connection.js");

var orm={
    selectAll: function(what){
        var queryString = "Select * From burgers";
        connection.query(queryString, function(err, res){
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne: function(burgerToInsert, devoured){
        var queryString = "Insert Into burgers (burger_name, devoured) Values (?)";
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