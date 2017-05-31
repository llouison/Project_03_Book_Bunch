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
1. Separated tasks by Express and React, Styling
2. Initialized repo
3. Created migration file and test seed files for database
4. Created app.js file and imported node modules
5. Created controllers
6. Created routes
7. Worked on user authentication
8. created models
9. created react app in client folder and connected it to express server
10. created react components (index, registration, header, footer, user dash, book, individual book, search, search results)
11. Create search component and connect to Google Books API
13. Wrote up directions for API
14. Added private routes for user auth
15. Installed react router
16. Added CRUD functionality to front-end
17. Styled app
18. Launched to Heroku

## Installation Instructions
1. Run `npm install` in the root folder and the client folder (each app has its own package.json and dependencies that need to be installed).
2. In the root folder, create `.env` file and add `SECRET_KEY`. Set the secret key to anything you want.
3. Run `createdb book_bunch_development` from the terminal in the root folder. This will create the database that the book bunch express app is set up to use.
4. Run `psql -f migrations_05232017.sql` in the migrations folder in db of the root folder.
5. Run `npm run dev` in the root folder.
6. In another terminal tab run `npm start` in the client folder.

## Coding Wins
We wanted to be sure the books table didn't have duplicate books, at first we used this query that first adds a book to a dual table then checks if it exists in books before adding it. Ultimately we used a conditional statement to first find if the books exists and return it, else create a new book. 
```
booksController.create = (req, res) => {
    Book.findByIsbn(req.body.isbn)
    .then(book => {
        if (book === null) {
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
```

The delete functionality was quite puzzling because no matter what book you tried to delete it would only search for one id number. We realized it was using the user id at the entry id from the users_books table. We added a findBookEntryId function that first retrieved the book entry id then used that to destroy it. 
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
When using the SQL date datatype, it actually rendered the date to include the time. `2017-01-01T05:00:00.000Z`. In order to display it correctly for the date input type, we had to slice the string. 
```
date_started: book.date_started.slice(0,10)
```
## Unsolved Problems
- username is case sensitive
- only the author search box works correctly
- the home page is supposed to show a different header bassed on user loggedIn status
- if a book has more than one genre, it's displayed as an object 

## Next Steps
- make the app responsiveness
- one-click logout
- error modals/alerts
- responsive add button
- social following ability
- create a notes section on individual book page
- add embedded/popup book preview
- add NYT best sellers API
- Link to amazon to purchase books
- Ability to scan isbn barcode on mobile
- Google Chrome extension for easy access to app from anywhere on the internet