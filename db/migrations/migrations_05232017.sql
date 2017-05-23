\connect book_bunch_development   --connecting to our main database

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL, --unique because no two or more people can have the same usernme
  email VARCHAR(255) UNIQUE NOT NULL, --ensures that more than one person is not using the same email address
  password VARCHAR(255) NOT NULL 
);

CREATE TABLE IF NOT EXISTS books (
  id BIGSERIAL PRIMARY KEY,
  title VARCHAR(1024),
  author VARCHAR(255),
  genre VARCHAR(255),
  isbn INTEGER,
  description VARCHAR(1024),
  rating DOUBLE PRECISION, --Looking online we found the best for our pupose was double precision becaus eour ratings are to one decimal point (example: rating:4.5)
  image_url VARCHAR(1024)
);


CREATE TABLE IF NOT EXISTS users_books (
  id BIGSERIAL PRIMARY KEY,
  user_ref_id INTEGER REFERENCES users(id)--This references the id integer from the users table
  book_ref_id INTEGER REFERENCES books(id), --This references the id integer from the books table
  status  VARCHAR(255) DEFAULT 'To Read', --the default for this column is to read because it hasn't been read intitially 
  review VARCHAR(1024) DEFAULT '', 
  date_started DATE DEFAULT '0000-00-00',
  date_finished DATE DEFAULT '0000-00-00'
);
