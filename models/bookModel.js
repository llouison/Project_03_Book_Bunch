// importing pg-promise from the config file
const db = require('../db/config');

// creating a model object
const Book = {};

// creating the findAll method - find all books belonging to user. User has to be signed in. If the user doesn't have any book, send message
Book.findAll = () => {
    return db.query('SELECT * FROM books ORDER BY id DESC');
};

// creating the findById method
Book.findById = id => {
    return db.oneOrNone('SELECT * FROM books WHERE id = $1', [id]);
};

// creating the create new book method
Book.create = book => {
    return db.one(
        `
        INSERT INTO books
        (title, author, genre, isbn, description, rating, image_url)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *
        `
        [book.title, book.author, book.genre, book.isbn, book.description, book.rating, book.image_url]
    );
};

// creating the update book method
Book.update = (book, id) => {
    return db.none(
        `
        UPDATE books SET
        title = $1,
        author = $2,
        genre = $3,
        isbn = $4,
        description = $5,
        rating = $6,
        image_url = $7
        WHERE id = $8
        `,
        [book.title, book.author, book.genre, book.isbn, book.description, book.rating, book.image_url, id]
    );
};

// creating the delete method
Book.destroy = id => {
    return db.none(
        `
        DELETE FROM books
        WHERE id = $1
        `,
        [id]
    );
};

// exporting the book model
module.exports = Book;