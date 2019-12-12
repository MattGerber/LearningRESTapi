const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

//get list of ninjas from db
router.get('/ninjas', function(req, res, next){
	res.send({type: 'GET'});
});

//add new ninja from db
router.post('/ninjas', function(req, res, next){
	Ninja.create(req.body).then(function(ninja){
		res.send(ninja);
	}).catch(next);
	// var ninja = new Ninja(req.body);
	// ninja.save();
});

//update existing from db
router.get('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
		Ninja.findOne({_id: req.params.id}).then(function(ninja){
			res.send(ninja);
		});
	});
});

//delete existing from db
router.get('/ninjas/:id', function(req, res, next){
	Ninja.findByIdAndRemove({_id: req.params.id}).then(function(ninja){
		res.send(ninja);
	}).catch(next);
});

module.exports = router;
