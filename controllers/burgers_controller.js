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
    burger.insertOne([req.body.name], function() {
	res.redirect("/");
    });

});

router.put("/:name", function(req, res) {
    burger.updateOne([req.body.devoured], [req.params.name], function() {
	res.redirect("/");
    });
});
module.exports = router;
