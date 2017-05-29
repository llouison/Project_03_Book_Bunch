/* importing passport node module and the user model */
const passport = require('passport');
const User = require('../../models/userModel');

/* exporting the function that encrypts and decrypts the user password to local.js*/
module.exports = () => {
  passport.serializeUser((user, done) => {
    console.log(user);
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
          console.log('user', user)
        done(null, user);
      })
      .catch(err => {
        console.log(err);
        done(err, null);
      });
  });
};