'use strict';
module.exports = function(app) {
  var marker = require('../controllers/markerController');

  // Marker Routes
  app.route('/marker')
    .get(marker.list_all_markers)
    .post(marker.create_a_markers);


  app.route('/marker/:markerId')
    .get(marker.read_a_marker)
    .put(marker.update_a_marker)
    .delete(marker.delete_a_marker);
};