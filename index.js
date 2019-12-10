const express = require('express');
const bodyParsser = require('body-parser')

//setup of express app
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//start request listening
app.listen(process.env.port || 4000, function(){
	console.log('listening for requests');
});

