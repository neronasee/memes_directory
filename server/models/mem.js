const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memSchema = new Schema({
	title: String,
	description: String,
	img: String,
	postDate : { type: Date, default: Date.now }
});

const Mem = mongoose.model('mem', memSchema);

module.exports = Mem;
