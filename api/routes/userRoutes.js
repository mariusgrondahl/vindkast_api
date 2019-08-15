'use strict';

const express = require("express");
const router = express.Router();
var user = require('../controllers/userController');

router.route('/')
  .get(user.list_all_users)
  .post(user.create_a_user);

router.route('/:userId')
  .get(user.read_a_user)
  .put(user.update_a_user)
  .delete(user.delete_a_user);

module.exports = router