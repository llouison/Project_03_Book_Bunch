/* importing bcrypt */
const bcrypt = require('bcryptjs');

/* creating a function that compares user input password to password in the databse */
function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

/* creating a function that checks if a user is logged in and reroutes them to the login page if not */
function loginRequired(req, res, next) {
  if (!req.user) {
    return res.redirect('/auth/login');
  }
  return next();
}

// eporting the functions
module.exports = {
  comparePass,
  loginRequired,
};