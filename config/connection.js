var mysql = require("mysql");

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Root",
    database:"burgerDB"
    });
};


connection.connect(function(err){
    if (err) throw err;
    console.log("Connected as id "+connection.threadId);
});

module.exports = connection;