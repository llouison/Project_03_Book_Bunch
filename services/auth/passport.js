/* importing passport node module and the user model */
const passport = require('passport');
const User = require('../../models/userModel');

/* exporting the function that encrypts and decrypts the user password */
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUserName(username)
      .then(user => {
        done(null, user);
      })
      .catch(err => {
        done(err, null);
      });
  });
};