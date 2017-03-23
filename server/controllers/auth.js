const User = require('../models/user.js');
const jwt = require('jwt-simple');
const config = require('../config.js');

const tokenForUser = user => {
	const timeStamp = new Date().getTime();
	return jwt.encode({ sub: user.id, iat: timeStamp }, config.secret);
}

exports.signup = (req, res, next) => {
	let { name, password } = req.body;

	if(!name || !password) {
		return res.status(422).send({error: "Provide name and password"});
	}

	User.findOne({ name: name.toLowerCase() }, (err, existingUser) => {
		if(err) return next(err);

		if(existingUser) {
			return res.status(422).json({error: "Name is already in in use"});
		}

		const user = new User({
			name,
			password
		});
		user.save(err => {
			if(err) return next(err);

			res.send({
				token: tokenForUser(user),
				user: user.name
			});
		})
	})
}

exports.signin = (req, res, next) => {
	res.send({
		token: tokenForUser(req.user),
		user: req.user.name
	})
}
