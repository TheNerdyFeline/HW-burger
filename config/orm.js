var connection = require("./connection.js");

// function to translate object into sql
function toSql(ob) {
    var arr = [];
    for(var key in ob) {
	if(Object.hasOwnProperty.call(ob, key)) {
	    arr.push(key +  "=" + ob[key]);
	}
    }
    return arr.toString();
};

var orm = {
    // shows all burgers in database
    selectAll: function(table, cb) {
	var queryString = "SELECT * FROM burgers";
	connection.query(queryString, function(err, res) {
	    if(err) {
		throw err;
	    } 
	    cb(res);

	});
    },

    // inserts new burger into db
    insertOne: function(table, vals, cb) {
	var queryString = "INSERT INTO burgers (name) VALUES ??" ;
	// add val grabbed from html into values
	connection.query(queryString, vals, function(err, res) {
	    if(err) {
		throw err;
	    }
	    cb(res);
	});
    },

    // updates devour boolean in db
    updateOne: function(table, condition, name, cb) {
	var queryString = "UPDATE burgers SET condition = ?? WHERE name = ??";
	connection.query(queryString, condition, name, function(err, res) {
	    if(err){
		throw err;
	    }
	    cb(res);
	});
    }
};

module.exports = orm;
