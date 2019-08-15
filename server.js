
var express = require('express');
var app = express();
var mongoose = require('mongoose');
require('dotenv').config();
var port = process.env.PORT;
var User = require('./api/models/userModel'); 
var Marker = require('./api/models/markerModel'); 
var bodyParser = require('body-parser');
var session = require('express-session');
const MongoStore = require('connect-mongo')(session);
var cookieParser = require('cookie-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// Connecting to database
mongoose.connect(process.env.MONGO_PASS, {useNewUrlParser: true, useFindAndModify: false})
  .then(x => {
    console.log(`Connected to Mongo Database`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });


// Setting up user sessions
app.use(session({
    secret: process.env.SESSION_SECRET,
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: (14 * 24 * 60 * 60), // = 14 days. Default
        autoRemove: 'native' // Default
    })
}));

// Protecting our routes
function protect(req,res,next){
    if(!req.session.user) {
        next(createError(403));
    } else {
        next();
    }
}


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//register the routes
app.use('/user',require('./api/routes/userRoutes'));
app.use('/marker', require('./api/routes/markerRoutes'));

app.listen(port, ()=> {
    console.log('Vindkast API started on: ' + port);
});

