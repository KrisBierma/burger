var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObj = {
            burgers: data
        };
        // console.log("burger data: "+ hbsObj); 
        res.render("index", hbsObj);

    })
});

// router.post("/api/bugers", function(req, res){
//     burger.insert(function(data){
//         console.log("working");
//     });
//     // res.json({})
// });

module.exports = router;