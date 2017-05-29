--connecting to our main database
--\connect book_bunch_development   

-- making the username and email unique ensures that no two people can have the same username or email
CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL, 
  password VARCHAR(255) NOT NULL 
);

-- Looking online we found the best for our pupose was double precision becaus eour ratings are to one decimal point (example: rating:4.5)
CREATE TABLE IF NOT EXISTS books (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(1024),
  author VARCHAR(255),
  genre VARCHAR(255),
<<<<<<< HEAD
<<<<<<< HEAD
  isbn Bigint ,
  description VARCHAR(2000),
=======
  isbn BIGINT ,
  description VARCHAR(1024),
>>>>>>> 61ee3434c23d4a5b9fef5ba462e63b9d9e44deaa
=======
  isbn BIGINT ,
  description VARCHAR(1024),
>>>>>>> f7a0425c13e3428f9c318c00cb1408487ed5e323
  rating DOUBLE PRECISION,
  image_url VARCHAR(1024)
);

-- this third table references the users table and the books table. The status, review, and dates columns have default values because they are added to the database separate from the edit page
CREATE TABLE IF NOT EXISTS users_books (
  id BIGSERIAL PRIMARY KEY,
  user_ref_id INTEGER REFERENCES users(id),
  book_ref_id INTEGER REFERENCES books(id), 
  status  VARCHAR(255) DEFAULT 'To Read',  
  review VARCHAR(1024) DEFAULT '', 
  date_started DATE DEFAULT '2017-01-01',
  date_finished DATE DEFAULT '2017-01-01'
);

