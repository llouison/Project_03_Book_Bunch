// importing the book model
const Book = require('../models/bookModel');

// creating the controller object
const booksController = {};

// defining the action once the findall promise is complete
booksController.index = (req, res) => {
    Book.findAll()
    .then(books => {
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
    .catch(err => {
        console.log(err);
        res.status(400).json({message: '400, err'});
    });
};

// exporting the book controller
module.exports = booksController;