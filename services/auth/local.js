/* importing passport and passport-local strategy method */
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
/* importing the passport helper file the userModel and auth helper */
const init = require('./passport');
const User = require('../../models/userModel');
const authHelpers = require('./authHelpers');

// creating a variable for the local object
const options = {};
/* initializing the passport function to encrypt and decrypt */
init();

/* checking to see if entered username exists in database then comparing passwords */
passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          console.log('no such user');
          return done(null, false);
        }
        if (!authHelpers.comparePass(password, user.password)) {
          console.log('wrong password');
          return done(null, false);
        } else {
          console.log(user);
          return done(null, user);
        }
      })
      .catch(err => {
        console.log(err);
        return done(err);
      });
  })
);

// exporting to auth.js
module.exports = passport;