

var Sequelize = require("sequelize");
//requiring the library
var sequelize = require("../config/connection.js")
//requiring our connection to the database

//creating a Burger model to match with the database
var Burger = sequelize.define("burgers",{
  burger_name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured:{
    type: Sequelize.BOOLEAN,
    default: false
  },

},{
  timestamps:false
});

Burger.sync();
//sync with the burger database

module.exports = Burger;