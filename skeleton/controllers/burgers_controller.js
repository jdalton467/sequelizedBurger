var express = require("express");

var router = express.Router();
var Burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {

  Burger.findAll({}).then(function(results){
    res.json(results);

    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: results };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/burgers/create", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  console.log("Burger Data:");
  console.log(req.body);  
 
  
  Burger.create({
    burger_name:req.body.burger_name
  }).then(function(results){
    res.end();
  });
});


// put route -> back to index
router.put("/burgers/update", function(req, res) {
  Burger.update(req.body.burger_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
