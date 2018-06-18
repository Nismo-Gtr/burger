var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
      orm.selectAll("burgers", cb);
    },
    // The variables cols and vals are arrays.
    create: function(burger_name, devoured, cb) {
      orm.create("burgers", burger_name, devoured, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("burgers", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = burger;