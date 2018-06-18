var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(table, cb) {
    // function for selecting all properties from burgers_db
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, [table], function(err, result) {
      if (err) throw err;
      console.log(result);
      cb(result);
    });
  },
  insertOne: function(burger_name, devoured) {
    //   function for inserting a new burger into burgers_db
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [burger_name, devoured], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(devoured, burger_name, id) {
    //   function for updating a burger currently in burgers_db
    var queryString = "UPDATE burgers SET devoured = ?, burger_name = ? WHERE id = ?";
    connection.query(
      queryString, [devoured, burger_name, id],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
