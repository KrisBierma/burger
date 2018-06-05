var mysql = require("mysql");
require("dotenv").config();
var keys = require("./keys.js");

//set up connection to db
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

//connect to server
connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id "+connection.threadId);
});

module.exports = connection;