//importing express and user controller
const express = require('express');
const controller = require('../controllers/usersController');
// creating a variable for the express router method
const router = express.Router();
// importing the authHelpers middleware
const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

function test(req, res, next) {
    console.log('testing', req.body)
    next();
}

router.get('/login', (req, res) => {
    res.json({message: 'login failed'})
});

router.get('/register', (req, res) => {
  res.json(res);
});

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

router.post('/register', test, controller.create);

router.post('/login', test, passport.authenticate('local', {
    successRedirect: '/api/users',
    failureRedirect: '/auth/login',
    failureFlash: false,
  }));

module.exports = router;