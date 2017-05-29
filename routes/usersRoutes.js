const express = require('express');
const usersController = require('../controllers/usersController');
const usersRoutes = express.Router();

const passport = require('../services/auth/passport');

usersRoutes.get('/', (req, res) => {
    //console.log(req.session);
    console.log('getting user', req.user);
    res.json({ user: req.user });
});

//display all the books on user's page
usersRoutes.get('/:id', usersController.index);

//display individual book on user's page

usersRoutes.get('/:id/:isbn', usersController.show);

//update a book on user's page
usersRoutes.put('/:id/:isbn', usersController.update);

//delete a book from users page
usersRoutes.delete('/:id/:isbn', usersController.destroy);

//create new user
usersRoutes.post('/', usersController.create);

//create new book entry on user's booklist
usersRoutes.post('/:id', usersController.createEntry);

// exporting to app.js
module.exports = usersRoutes;