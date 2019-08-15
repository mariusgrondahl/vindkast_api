var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var UserSchema = new Schema({
  username: {
    type: String,
    required: [true, 'We need a username']
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

  UserSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);