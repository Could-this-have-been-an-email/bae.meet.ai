var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;

var db = require("../models");

passport.use(new LocalStrategy(
  {
    usernameField: "email"
  },
  function (email, password, done) {
    console.log("email", email, password)
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
      console.log("returneeddd")
      return done(null, dbUser);
    });
  }
));
passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});

module.exports = passport;
