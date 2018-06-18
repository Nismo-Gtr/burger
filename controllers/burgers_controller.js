var express = require("express");
var burgers = require("../models/burger.js")

var router = express.Router();

router.get("/", function(req,res){
  res.redirect("/index");
})
// Create all our routes and set up logic within those routes where required.
router.get("/index", function(req, res) {
    burgers.selectAll(function(data) {
      var burgers_data = {
        burgers: data
      };
      console.log(burgers_data);
      res.render("index", burgers_data);
    });
  });
  
  router.post("/burgers/create", function(req, res) {
    burgers.create([
      "name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burgers.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;
