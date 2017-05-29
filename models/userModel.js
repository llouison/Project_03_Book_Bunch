// importing pg-promise from the config file
const db = require('../db/config');

// creating a model object
const User = {};

// creating the find user method 
User.findByUserName = userName => {
    console.log('in model', userName)
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [userName]);
};

// creating the findAll method to find all books belonging to user
User.findAll = id => {
    return db.query('SELECT users.username, users_books.id, books.title, books.author, books.genre, books.isbn, books.description, books.rating, books.image_url, users_books.status, users_books.review, users_books.date_started, users_books.date_finished FROM users JOIN users_books ON users.id = users_books.user_ref_id JOIN books ON users_books.book_ref_id = books.id WHERE users.id = $1', [id]);
};

// creating the find an individual book belonging to a user method
User.findIndividBook = (id,isbn) => {
    return db.query('SELECT users.username, users_books.id, books.title, books.author, books.genre, books.isbn, books.description, books.rating, books.image_url, users_books.status, users_books.review, users_books.date_started, users_books.date_finished FROM users JOIN users_books ON users.id = users_books.user_ref_id JOIN books ON users_books.book_ref_id = books.id WHERE users.id = $1 and books.isbn = $2', [id, isbn]);
};

User.findBookEntryId = (id, isbn) => {
    return db.query('SELECT users_books.id FROM users JOIN users_books ON users.id = users_books.user_ref_id JOIN books ON users_books.book_ref_id = books.id WHERE users.id = $1 and books.isbn = $2', [id, isbn]);
};

// creating the create new user method
User.create = user => {
    return db.one(
        `
        INSERT INTO users
        (username, email, password)
        VALUES ($1, $2, $3) RETURNING *
        `,
        [user.username, user.email, user.password]
    );
};

// creating the add entry method
User.createEntry = (entry) => {
    console.log('creating entry in model', entry.userId);
    return db.one(
        `
        INSERT INTO users_books (user_ref_id, book_ref_id) VALUES ($1, $2) RETURNING *
        `,
        [entry.userId, entry.bookId]
    );
};

// creating the update user's book method
User.update = (users_book, id) => {
    return db.none(
        `
        UPDATE users_books SET
        status = $1,
        review = $2,
        date_started = $3,
        date_finished = $4
        WHERE id = $5
        `,
        [users_book.status, users_book.review, users_book.date_started, users_book.date_finished, id]
    );
};

// creating the delete method
User.destroy = entryId => {
    console.log('deleting', entryId);
    return db.none(
        `
        DELETE FROM users_books
        WHERE id = $1
        `,
        [entryId]
    );
};

// exporting the user model
module.exports = User;