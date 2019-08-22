const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT;

const User = require('./api/models/userModel'); 
const Marker = require('./api/models/markerModel'); 
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const cookieParser = require('cookie-parser');
const cors = require('cors');


// mongoose instance connection url connection
mongoose.Promise = global.Promise;

// Connecting to database
mongoose.connect(process.env.MONGO_PASS, {useNewUrlParser: true, useFindAndModify: false})
  .then(x => {
    console.log(`Connected to Vindkast Mongo Database`)
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

// Setting up CORSFIX
app.use(cors({
    credentials: true,
    origin: true,
    methods: 'GET, POST, PUT, DELETE, OPTIONS', 
    allowedHeaders: 'Authorization, Access-Control-Allow-Headers, Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
}))




//Setting up our routes
app.use('/',require('./api/routes/authRoutes'));
app.use('/marker', require('./api/routes/markerRoutes'));
app.use('/user', require('./api/routes/userRoutes'));



app.listen(port, ()=> {
    console.log('Vindkast API started on: ' + port);
});

