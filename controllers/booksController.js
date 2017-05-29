// importing the book model
const Book = require('../models/bookModel');

// creating the controller object
const booksController = {};

// defining the action once the findall promise is complete
booksController.index = (req, res) => {
    Book.findAll()
    .then(books => {
        //console.log(books);
        res.json({
            message: 'ok',
            data: { books },
        });
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400', err});
    });
};

// defining the action once the findByIsbn promise is complete
booksController.show = (req, res) => {
    Book.findByIsbn(req.params.isbn)
    .then(book => {
        res.json({
            message: 'ok',
            data: { book },
        });
    })
    .catch(err => {
        res.status(400).json({ message: '400', err});
    });
};

// defining the action once the create new book promise is complete
booksController.create = (req, res) => {
    Book.findByIsbn(req.body.isbn)
    .then(book => {
<<<<<<< HEAD
<<<<<<< HEAD
        // if (book.isbn = null) {
=======
        if (book === null) {
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
        if (book === null) {
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
            Book.create({
                title: req.body.title, 
                author: req.body.author,
                genre: req.body.genre,
                isbn: req.body.isbn,
                description: req.body.description, 
                rating: req.body.rating, 
                image_url: req.body.image_url,
            })
            .then(book => {
                res.json({ message: 'ok', data: { book }});
            })
        } else {
            res.json({
                message: 'ok',
                data: { book },
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400, err'});
    });
};   

// exporting the book controller to booksRoutes
module.exports = booksController;