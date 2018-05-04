var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    console.log("router");
    burger.selectAll(function(data){
        var hbsObj = {
            burgers: data
        };
        console.log("burger data: "+ hbsObj); 
        res.render("index", hbsObj);

    })
});

router.post("/api/burgers", function(req, res){
    burger.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result){
        console.log("working");
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = "+req.params.id;
    console.log("condition: "+condition);
    console.log("req.body: "+req.body.devoured);
    burger.update({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else{
            res.status(200).end();
        }
    });
});

module.exports = router;