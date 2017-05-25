//importing express and user controller
const express = require('express');
const controller = require('../controllers/usersController');
// creating a variable for the express router method
const router = express.Router();
// importing the authHelpers middleware
const authHelpers = require('../services/auth/authHelpers');
const passport = require('../services/auth/local');

router.get('/login', (req, res) => {
    console.log(res);
//   res.json(res);
});
router.get('/register', (req, res) => {
  res.json(res);
});
router.post('/register', controller.create);
router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/auth/login',
    failureFlash: false,
  })
);
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;