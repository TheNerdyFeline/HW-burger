var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
	var burObj = {
	    burgers: data
	};
	res.render("index", burObj);
    });
});

router.post("/", function(req, res) {
    burger.insertOne(["burger_name"], [req.body.burger], function() {
	res.redirect("/");
    });

});

router.put("/:id", function(req, res) {
    burger.updateOne([req.params.id], function() {
	res.redirect("/");
    });
});
module.exports = router;
