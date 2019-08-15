const express = require("express");
const router = express.Router();
var user = require('../controllers/userController');


router.route('/signup')
  .post(user.create_a_user);

router.route('/login')
  .post(user.login_a_user);

router.route('/:userId')
  .put(user.update_a_user)
  .delete(user.delete_a_user);


// Keeping this to places for now
getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

module.exports = router