/* setting up express and importing helper node modules*/
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
/* dotenv locats the environment variables in the .env file */
require('dotenv').config();
/* creating a variable for the express function*/
const app = express();

/* setting up port to listen to*/
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

/* setting up static file redirect*/
app.use('/static', express.static(path.join(__dirname, 'public')));
/* setting up cors*/
app.use(cors());
/* setting up logger to log activity when the server is running */
app.use(logger('dev'));
app.use(cookieParser());
/* setting up body parser to parse the request object*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

/* ###### setting routes ###### */
/* index route*/
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

/* importing routes and assigning urls for books api and users api*/
const booksRoutes = require('./routes/booksRoutes');
const usersRoutes = require('./routes/usersRoutes');
const authRoutes = require('./routes/auth');
app.use('/api/books', booksRoutes);
app.use('/api/users', usersRoutes);
app.use('/auth', authRoutes);

/* handling 404*/
app.get('*', function(req,res) {
    res.status(404).send({message: 'Oops! Not found.'});
});
