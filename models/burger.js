var orm = require("../config/orm.js");

//this is passed to burgers_controller
var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    create: function(columns, values, cb){
        orm.create(columns, values, function(res){
            cb(res);
        });
    },
    update: function(value, condition, cb){
        orm.update(value, condition, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete(condition, function(res){
            cb(res);
        });
    }
};

module.exports=burger;