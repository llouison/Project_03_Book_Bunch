*** Team ALA - Ahsan, Lisa, Aliaksei / 5.23.17 ***

# Book Bunch

![img](./assets/millenials_read.png)

## What is Book Bunch?

Contrary to popular belief, Millennials read more than older generations do—and more than the last generation did at the same age! An [article](https://www.theatlantic.com/technology/archive/2014/09/millennials-are-out-reading-older-generations/379934/) about the 2014 Pew Research Center report said that "Deeper connections with [books] are also often associated with key life moments such as having a child, seeking a job, being a student, and going through a situation in which research and data can help inform a decision." Soooo...basically all of your 20's! Everything on the internet is interconnected. What better place to have a list of the books you've found on forbes, ESPN, instagram, in a youtube video, amazon etc. that can help you tackle those life event than Book Bunch? 

Book Bunch is a virtual bookshelf CRUD app where users can: 
- View books on a user profile archived in the database
- Add books to the database(by searching the google books api)
- Edit books in the database, update the status of the book (read, reading, to-read), and add a review of the book
- And delete books from the database

## Technologies To Be Used
- Express (backend)
- Postgres/Pg-Promise (working with database)
- React (frontend)
- Bcrypt/sessions (for user authentication)
- Git/Github.com ()
- CSS3 (styling)
- Heroku (web hosting)

## Installation of dependencies

In the command line from the root folder run -npm install

1. Run `npm install` in the root folder and the client folder
2. in the root folder, create `.env` file and add `SECRET_KEY`. Set the secret key to anything you want
3. run `psql -f migrations_05232017.sql` in the migrations folder in db of the root folder
4. run `npm run dev` in the root folder
5. in another terminal tab run `npm start` in the client folder


## Wireframes

#### Landing on home page

![img](./assets/bookbunch_1.1.png)

#### Registration Form

![img](./assets/bookbunch_2.png)

#### Add Book/Search Page

![img](./assets/bookbunch_3.1.png)

#### User Collection Page

![img](./assets/bookbunch_4.1.png)

#### Individual Book Page

![img](./assets/bookbunch_5.1.png)


## Initial thoughts on database structure

Users.

| id | Username   | Email   | Password    | 
|--- |:----------:|:-------:| -----------:|
| 1  | 'username' | 'email' | 'password'  | 
| 2  | 'username' | 'email' | 'password'  | 
| 3  | 'username' | 'email' | 'password'  | 

Books.

| id | Title   | Author   | Genre  |   ISBN  |Description   | Rating | Image Url |  
|--- |:-------:|:--------:|:------:|:-------:|:------------:|:------:| ---------:| 
| 1  | 'title' | 'author' | 'genre'|  num    |'description' | num    | 'url'     |
| 2  | 'title' | 'author' | 'genre'|  num    |'description' | num    | 'url'     |
| 3  | 'title' | 'author' | 'genre'|  num    |'description' | num    | 'url'     |

Users_Books table.

| id | user_ref_id | book_ref_id | status   | review      | date_started  | date_finished | 
|--- |-------------:|:-----------:| :-------:|:----------:|:-------------:| -------------:|
| 1  |     1        |     1       |'Reading' | 'Loved it' | 'YYYY-MM-DD'  | 'YYYY-MM-DD'  |
| 2  |     2        |     1       | 'Read'   | 'Hated it' | 'YYYY-MM-DD'  | 'YYYY-MM-DD'  |
| 3  |     1        |     2       | 'To-Read'| 'Loved it' | 'YYYY-MM-DD'  | 'YYYY-MM-DD'  |

## Advanced Features
- notes section on individual book page
- embedded/popup book preview
- Link to amazon to purchase books
- Ability to scan isbn barcode on mobile
- Google Chrome extension for easy access to our app from anywhere the user may be surfing in the internet.
## User Stories
1. I want to be able to have a virtual bookshelf that I can easiy access online.
    
    -BookBunch is an app that is just that!  It is a virtual bookshelf where I search for books and add them to my virtual bookshelf. The app is robust and lets me search thousands of books.  The app is also minimalist in its design so I will not have trouble or difficulty navigating the pages and functionality.  

2. I want to be able to have this app personalized towards me.  
    -The BookBunch app has an authentication feature that let's me login and save my session.
    -The app has a virtual book shelf that lets you see what you have read, reading, and will read
    -The app also has a feature where you can add you own reviews to books to make it more personalized.  You can also look back on your reviews years down the line to see how you were feeling and going through at that moment in your life!

3.  I want the signup process to be very easy to navigate.
    -the app allows me to register on the homepage.
    -There are only three input fields: one for username, email, and password.
    -Once the regsiter button is clicked I will no longer have to ever worry about registering.

4. I don't want to sign in for each use.
    -The app remebers the user and the session associated with it.
    -If you clsoe the app and restart, the app will remember your credentials.

5. I want to be able to add books which I am not ready to read right away.
    -The app lets me add books I am interested in into a virtual queue system.
    -The book gets added to the queue and then I can have it on that 'to read' shelf in my virtual bookshelf.  
    -The page where I can see this is styled nice and thoughtfully organized.

6. I want to be able to see all the relevant information about the book, such as author, isbn     number, genre, etc.
    -The app has a page with the information for individual books once I click on a book icon.
    -At this page you can see all the relevant inforation about the book.
    -There is also an image so I can see what the book looks like.

7.  I want to be able to express my feelings about the book I just read.
    -Once I go to the individual bookpage, I will be able to write a review.
    -The write a review form will be on the right side of the screen.
    -Once I write a review and click submit,it will forever be linked to that book and me.

8.  I want to be able to change a review.
    -The reviews associated with each book also have an update button.
    -Once this button is clicked, I can edit and make changes within the box.
    -Once I hit the submit button, the review blurb will be updated to what I want.
    -There is no limit to how many times I can update my review.

9. I want to able to delete a review entirely.
    -The review box also comes with a delete button.
    -Once I click this button, the review will be destroyed.

10.  I want to be able to  end my session from anywhere in the app.
    -there is aways a 'logout' button on teh top right corner of the app for this purpose.
    -You can also naviaget back to home or you colllections oage.

11.  I want to be able to see all my books in a format that isn't a list.
    -I can see my collections in the 'myCollection' page
    -The layout is not in a list.  
    -It is tiered into three sections: 'read', 'reading', and 'to read'
    -I can also click on any of the individual book icons in this page to naviaget to the individual book information page.


12. As a user of BookBunch, I want to be able to search for books based on the author.
    
    -The BookBunch app has a search feature where I can input the the author and get a list based on the results.
    -BookBunch uses the google Books API in order to search and render the books being searched.
    -On the search page, I can input the author in the field and when I click the 'search for books' button, the page populates with a list of ten items.  These ten items are the top ten searches from the googleBOoks API.
    -The listed books have the title, author, genre, ISBN number, description, and a rating that accompanies every listed book item.
    -At the bottom of each item is a a 'add it' button that i can click.  This adds the book to my collection that I have on the web app.

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

## Links and Resources

- https://developers.google.com/books/
- https://developers.google.com/books/docs/v1/using#PerformingSearch
- http://developer.nytimes.com/books_api.json#/Documentation/GET/lists.%7Bformat%7D
- https://developers.google.com/books/docs/preview-wizard
- https://react-bootstrap.github.io/
- https://www.nytimes.com/books/best-sellers/?mcubz=0
- https://www.forbes.com/sites/neilhowe/2017/01/16/millennials-a-generation-of-page-turners/#255cd1fa1978
- http://www.androidauthority.com/best-ebook-ereader-apps-for-android-170696/

- https://git.generalassemb.ly/nyc-wdi-ada/ada-with-jointables


