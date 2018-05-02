var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.all(function(data){
        console.log("working"); 
    })
    res.render("index", data);
});

router.post("/api/bugers", function(req, res){
    burger.insert(function(data){
        console.log("working");
    });
    // res.json({})
});

module.exports = router;