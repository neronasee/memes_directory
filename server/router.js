const Authentication = require('./controllers/auth.js');
const passportConfig = require('./services/passport.js');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = (app) => {
	app.get('/', requireAuth, (req, res) => {
		res.send({message: "Authorised section"});
	})
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
}
