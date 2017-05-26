const express = require('express');
const usersController = require('../controllers/usersController');
const usersRoutes = express.Router();

const passport = require('../services/auth/passport');

usersRoutes.get('/', (req, res) => {
    console.log('getting /user')
    res.json({ user: 'user profile page placeholder', userInfo: req.user });
});

//display all the books on user's page
usersRoutes.get('/:id', usersController.index);

//display individual book on user's page

usersRoutes.get('/:id/:isbn', usersController.show);

//update a book on user's page
usersRoutes.put('/:id/:isbn', usersController.update);

//delete a book from users page
usersRoutes.delete('/:id/:isbn', usersController.destroy);

//create individual book on user's page
usersRoutes.post('/', usersController.create);


module.exports = usersRoutes;