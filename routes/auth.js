//importing express and user controller
const express = require('express');
const controller = require('../controllers/usersController');
// creating a variable for the express router method
const router = express.Router();
// importing the authHelpers middleware
const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

// this function tests if the login function works and displays the request
test = (req, res, next) => {
    console.log('testing', req.body);
    next();
};

/* this function is called when the login failed redirect happens and sends the failure message to the client*/
router.get('/login', (req, res) => {
    res.json({message: 'login failed'})
});

// this function sends the user information back to the client after successful registration
router.get('/register', (req, res) => {
  res.json(res);
});

// this function logs user out of the current session then redirects to the home page
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// this function creates a new user after they register
router.post('/register', test, controller.create);

/* this function takes in the username and password from the login page and matches it to the database. On success it reroutes to the userdashboard, on failure it redirects back to the login page*/
router.post('/login', test, passport.authenticate('local', {
    successRedirect: '/api/users',
    failureRedirect: '/auth/login',
    failureFlash: false,
  }));

// exporting to app.js
module.exports = router;