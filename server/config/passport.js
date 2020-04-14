var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

//possible for heroku if needed?
// var PassportHerokuAddon = require('passport-heroku-addon');

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {
    console.log('33333333', email, password)
    db.User.findOne({
      email: email
    }).then(function (dbUser) {
      console.log("--------=======------", dbUser)
      if (!dbUser) {
        console.log('no user found')
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      else if (dbUser.password !== password) {
        console.log('wrong pass bitch')
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      return done(null, dbUser);
    });
  }
));
passport.serializeUser(function (user, done) {
  console.log('ster', user.id)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

module.exports = passport;
