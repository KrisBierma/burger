var mysql = require("mysql");
require("dotenv").config();
var keys = require("./keys.js");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: keys.keys.mysqlKey,
    database:"burgerDB"
    });
};


connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id "+connection.threadId);
});

module.exports = connection;