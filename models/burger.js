var orm = require("../config/orm.js");


//how to do this???
//this is passed to burgers_controller
var burger = {
    all: function(cd){
        orm.selectAll("burgers", function(res){
            cd(res);
        });
    },
    insert: orm.insertOne("name, false"),
    update: orm.updateOne("id")
};

module.exports=burger;