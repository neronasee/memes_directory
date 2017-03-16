const passport = require('passport');
const User = require('../models/user.js');
const config = require('../config.js');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const jwtOptions = {
	jwtFromRequest: ExtractJwt.fromHeader('authorization'),
	secretOrKey: config.secret
}

const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
	User.findById(payload.sub, (err, user) => {
		if(err) return done(err, false);

		if(user) {
			done(null, user);
		} else {
			done(null, false);
		}
	})
});

const localOptions = {
	usernameField: "name"
}

const localLogin = new LocalStrategy(localOptions, function(name, password, done) {
	User.findOne({ name: name }, (err, user) => {
		if(err) return done(err, false);
		if(!user) return done(null, false);

		user.comparePassword(password, (err, isMatch) => {
			if(err) return done(err);
			if(!isMatch) return done(null, false);

			return done(null, user);
		})
	})
})

passport.use(jwtLogin);
passport.use(localLogin);
