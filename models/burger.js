var orm = require("../config/orm.js");

//this is passed to burgers_controller
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        console.log("selectAll");
        });
    },
    create: function(columns, values, cb){
        orm.create(columns, values, function(res){
            cb(res);
            console.log("inserting");
        });
    },
    update: function(value, condition, cb){
        orm.update(value, condition, function(res){
                        console.log("updating");

            cb(res);
        });
    }
};

module.exports=burger;