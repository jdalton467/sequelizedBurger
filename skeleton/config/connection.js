
//require the sequelize package

var Sequelize = require("sequelize");


//create a mySQL connection using Sequelize

var sequelize = new Sequelize("burgers_db","root", "$LMPH%",{
	host:"localhost",
	dialect:"mysql",
	pool:{
		max: 5,
		min: 0,
		idle: 10000
	}
});

module.exports = sequelize;
//exporting the connection for other files to use