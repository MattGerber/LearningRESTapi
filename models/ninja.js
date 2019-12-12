const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creat new schema
const GeoSchema = new Schema({
	type: {
		type: String,
		default: "Point"
	},
	coordinates: {
		type: [Number],
		index: "2dsphere"
	}
});

//create ninja model & schema
const NinjaSchema = new Schema({
	name: {
		type: String,
		required: [true, 'Name field required']
	},
	rank: {
		type: String
	},
	availible: {
		type: Boolean,
		default: false
	},
	geometry: GeoSchema
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;