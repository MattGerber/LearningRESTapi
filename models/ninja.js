const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
	}
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;