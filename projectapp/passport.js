const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');//???????
const LocalStrategy = require('passport-local');
const User = require('./models/user');

passport.use(new JWTstrategy({
	jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
	secretOrKey: 'yoursecretstring'
},	async function(payload, done){
	done(null,null);
	// try{
	// 	console.log("text");
	// 	const user = await User.findById(payload.sub);
	// 	console.log(payload.sub);
	// 	if(!user){
	// 		return done(null, false);
	// 	}
	// 	done(null, user);
	// }
	// catch(error){
	// 	done(error, false);
	// }
}));


passport.use(new LocalStrategy({
	usernameField: 'email'
}, async function(email, password, done){
	try{	
	const user = await User.findOne({email});
	if(!user){
		return done(null, false);
	}	
	const isMatch = await user.isValidPassword(password);
	if(!isMatch){
		return done(null, false);
	}
	done(null, user);
}catch(error){
	done(error, false);
}
}));
