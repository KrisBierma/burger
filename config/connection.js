var mysql = require("mysql");
var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root",
    database:"burgerDB"
});

connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id "+connection.threadId);
});

module.exports = connection;