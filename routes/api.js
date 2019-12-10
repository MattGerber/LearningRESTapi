const express = require('express');
const router = express.Router();

//get list of ninjas from db
router.get('/ninjas', function(req, res){
	res.send({type: 'GET'});
});

//add new ninja from db
router.post('/ninjas', function(req, res){
	console.log(req.body);
	res.send({
		type: 'POST',
		name: req.body.name,
		rank: req.body.rank
	});
});

//update existing from db
router.get('/ninjas/:id', function(req, res){
	res.send({type: 'PUT'});
});

//delete existing from db
router.get('/ninjas/:id', function(req, res){
	res.send({type: 'DELETE'});
});

module.exports = router;
