var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  username: {
    type: String,
    required: 'We need a username'
  },
  password: {
    type: String,
    required: 'Password required'
  },
  email: {
    type: String,
    required: 'Email required'
  },
  firstname: {
    type: String,
    required: 'firstname required'
  },
  lastname: {
    type: String,
    required: 'Lastname required'
  },
  markers: [{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'markers' 
  }]
  
  },
  {timestamps: true
  }, {
    collection: "users"
  });


module.exports = mongoose.model('User', UserSchema);