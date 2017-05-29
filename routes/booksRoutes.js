
//importing express, controller and express router function
const express = require('express');
const booksController = require('../controllers/booksController');
const booksRoutes = express.Router();

//find all the books
booksRoutes.get('/', booksController.index);

//find a book by isbn
booksRoutes.get('/:isbn', booksController.show);

//create a new book
booksRoutes.post('/', booksController.create);

// exporting to app.js
module.exports = booksRoutes;