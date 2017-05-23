\connect book_bunch_development   --connectting to our main database

CREATE TABLE IF NOT EXISTS users ( --This is our users database with the columns of id, username,email, and password
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL, --unique because no two or mor people can have the same usernme
  email VARCHAR(255) UNIQUE NOT NULL, --ensures that more than one person is not using the saem email adress
  password VARCHAR(255) NOT NULL 
);

CREATE TABLE IF NOT EXISTS books ( --This is our books database with the columns of id, title, etc... 
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(1024),
  author VARCHAR(255),
  genre VARCHAR(255),
  isbn INTEGER,
  description VARCHAR(1024),
  rating DOUBLE PRECISION, --Looking online we found the best for our pupose was double precision becaus eour ratings are to one decimal point (example: rating:4.5)
  image_url VARCHAR(1024),

);


CREATE TABLE IF NOT EXISTS users_books ( --user books table.
  id BIGSERIAL PRIMARY KEY,
  user_ref_id INTEGER REFERENCES users(id)--This refernces the id integer from the users table. 
  book_ref_id INTEGER,
  status  VARCHAR(255) DEFAULT 'To Read', --the default for this column is to read because it hasnt been read intitially 
  review VARCHAR(1024) DEFAULT NOT NULL, 
  date_started DATE DEFAULT '0000-00-00',--set a default date
  date_finished DATE
);