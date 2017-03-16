const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
	name: {
		type: String,
		unique: true,
		lowercase: true
	},
	password: String
});

userSchema.pre('save', function(next) {
	const user = this;

	bcrypt.genSalt(10, (err, salt) => {
		if(err) return next(err);

		bcrypt.hash(user.password, salt, null, (err, hash) => {
			if(err) return next(err);

			user.password = hash;
			next();
		})
	})
})

userSchema.methods.comparePassword = function(givenPass, cb) {
	bcrypt.compare(givenPass, this.password, function(err, isMatch) {
		if(err) return cb(err);

		cb(null, isMatch);
	})
}

const User = mongoose.model('user', userSchema);

module.exports = User;
