var connection = require("./connection.js");

var orm = {
    // shows all burgers in database
    selectAll: function(table, cb) {
	var queryString = "SELECT * FROM " + table;
	connection.query(queryString, function(err, res) {
	    if(err) {
		throw err;
	    } 
	    cb(res);

	});
    },

    // inserts new burger into db
    insertOne: function(table, col, val, cb) {
	var queryString = "INSERT INTO " + table + " (" + col + ") VALUES(?)";
	// add val grabbed from html into values
	connection.query(queryString, val, function(err, result) {
	    if(err) {
		throw err;
	    }
	    cb(result);
	});
    },

    // updates devour boolean in db
    updateOne: function(table, id, cb) {
	var queryString = "UPDATE burgers SET devoured = true WHERE id = " + id;
	connection.query(queryString, id, function(err, res) {
	    if(err){
		throw err;
	    }
	    cb(res);
	});
    }
};

module.exports = orm;
