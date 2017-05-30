*** Team ALA - Ahsan, Lisa, Aliaksei / 5.23.17 ***

# Book Bunch

![img](./assets/millenials_read.png)

## User Story
A user wants to have a virtual personalized bookshelf that they can easily access online and navigate through. They want to be able to search for a book in multiple ways, see all the relevant information about the books, and add them to a well-organized list (whether they've read the books already or plan to in the future). They also want to be able to add their personal thoughts on the book and edit that should it change over time. Lastly, they want to be able to remove a book from their reading list altogether. 

#### [Link to empathy map](https://github.com/llouison/Project_03_Book_Bunch/blob/master/assets/empathymap.jpg)

## Acceptance Criteria
Users should be able to: 
- Easily register for an account or login
- Search for books, view information about the books (title, author, genre, ISBN number, description, rating and cover image), and add them to a virtual bookshelf 
- TheHave a secure, personalized experience
- Easily navigate the app and end the session at any time  
- Organize books based on read, reading, and to read statuses
- Be able to view a particuler book in the collection on a single page, add a review of the book and edit/update it at any time
- Document the dates they began reading the book and finished it
- Delete a book from their collection

#### [Link to wireframes](https://github.com/llouison/Project_03_Book_Bunch/tree/master/assets)

## Technologies Used
- Express/Pg-promise: the app consumes its own RESTful Express API using pg-promise
- SQL: the server has a three-tabled database structure 
- Isomorphic Fetch: the app uses fetch to consume the third party Google Books API
- React: Book Bunch is a single-paged app that uses react to render the client-facing front-end
- Passport/Bcrypt/sessions: the app has a user authentication strategy
- Git/Github.com: the team repository is stored on github.com through CLI
- CSS3: the app is styled with clean and well-formatted CSS
- Heroku: the app and server are hosted on Heroku

## Approach Taken
## Installation Instructions
1. Run `npm install` in the root folder and the client folder
2. in the root folder, create `.env` file and add `SECRET_KEY`. Set the secret key to anything you want
3. run `psql -f migrations_05232017.sql` in the migrations folder in db of the root folder
4. run `npm run dev` in the root folder
5. in another terminal tab run `npm start` in the client folder

## Coding Wins
```
INSERT INTO books (title, author, genre, isbn, description, rating, image_url) 
        SELECT $1, $2, $3, $4, $5, $6, $7 
        FROM dual
        WHERE NOT EXISTS (
            SELECT * FROM books WHERE books.isbn = $4
        )
        RETURNING *
```

```
userController.destroy = (req, res) => {
  console.log('in controller to destroy');
  User.findBookEntryId(req.params.id, req.params.isbn)
    .then(entryId => {
        User.destroy(entryId[0].id, req.params.isbn)
        .then(() => {
            res.json({message: 'book entry deleted'});
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    })
};
```
```
date_started: book.date_started.slice(0,10)
```
## Unsolved Problems/Next Steps
- notes section on individual book page
- embedded/popup book preview
- Link to amazon to purchase books
- Ability to scan isbn barcode on mobile
- Google Chrome extension for easy access to our app from anywhere the user may be surfing in the internet.