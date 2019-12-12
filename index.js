if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//setup of express app
const app = express();

var uri = process.env.URI;
mongoose.connect(uri, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false 
}); 
var db=mongoose.connection;
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ 
    extended: true
}));
// app.get('/', (req, res) => {
//     res.set({
//         'Access-control-Allow-Origin': '*'
//     });
//     return res.render('kkk');
// }).listen(3000)
// console.log("Started: Now listening on P-3000");


//mongodb connection
// mongoose.connect('URI = "mongodb+srv://Admin:Matcha123@cluster0-lrkkj.mongodb.net/test?retryWrites=true&w=majority"');
mongoose.Promise = global.Promise;

app.use(express.static('public'))


//initialize routes
app.use('/api', require('./routes/api'));

//err handeling
app.use(function(err, res, req, next){
	console.log(err);
	// res.status(422).send({
	// 	error: err.message
	// });
});

// start request listening
app.listen(process.env.port || 4000, function(){
	console.log('listening for requests');
});