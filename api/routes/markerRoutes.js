'use strict';
const express = require("express");
const router = express.Router();
var marker = require('../controllers/markerController');

// Marker Routes
router.route('/')
    .get(marker.list_all_markers)
    .post(marker.create_a_marker);


router.route('/:markerId')
    .get(marker.read_a_marker)
    .put(marker.update_a_marker)
    .delete(marker.delete_a_marker);


module.exports = router
