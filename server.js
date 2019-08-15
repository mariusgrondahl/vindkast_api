require('dotenv').config()
var express = require('express'),
app = express(),
port = process.env.PORT  ,
mongoose = require('mongoose'),
User = require('./api/models/userModel'), //created model loading here
Marker = require('./api/models/markerModel'), //created model loading here
bodyParser = require('body-parser');
  
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


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//importing route
var markerRoutes = require('./api/routes/markerRoutes'); 
var userRoutes = require('./api/routes/userRoutes'); 
//register the route
userRoutes(app); 
markerRoutes(app);



app.listen(port);


console.log('Vindkast API started on: ' + port);