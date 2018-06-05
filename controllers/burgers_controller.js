//3 files: orm.js passes orm obj to burger.js, which passes burger obj to burger_controller.js, which has the routes

var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

//all routes
//calls the burger obj (which has the orm) from burger.js

//home page
router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);

    })
});

//creating burger
router.post("/api/burgers", function(req, res){
    burger.create(["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result){
        res.json({id:result.insertId});
    });
});

router.put("/api/burgers/:id", function(req,res){
    var condition = "id = "+req.params.id;

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

router.delete("/api/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    burger.delete(condition, function(result){
        if (result.affectedrows ==0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;