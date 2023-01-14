const passport=require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
  //console.log(user);
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  //User.findById(id, function(err, user) {
    done(null, user);
  //});
});

passport.use(new GoogleStrategy({
    clientID:"1004208902847-bn75b0p9nsdu2lvpk9bk5kdi1m26haa4.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL:"http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    //User.findOrCreate({ googleId: profile.id }, function (err, user) {
    return done(null, profile);
    //});
  }
));
