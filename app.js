// setting up express and importing helper node modules
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// setting up port to listen to
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`);
});

// setting up static file redirect
app.use('/static', express.static(path.join(__dirname, 'public')));
// setting up cors
app.use(cors());
/* setting up logger to log activity when the server is running */
app.use(logger('dev'));
// setting up body parser to parse the request object
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* ###### setting routes ###### */
// index route
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// books api
const booksRoutes = require('./routes/booksRoutes');
app.use('/api/books', booksRoutes);

// handling 404
app.get('*', function(req,res) {
    res.status(404).send({message: 'Oops! Not found.'});
});
