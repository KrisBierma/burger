var orm = require("../config/orm.js");


//how to do this???
//this is passed to burgers_controller
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    }
    // insert: orm.insertOne("name, false"),
    // update: orm.updateOne("id")
};

module.exports=burger;