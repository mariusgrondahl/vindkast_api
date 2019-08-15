'use strict';
var mongoose = require('mongoose'),
Marker = mongoose.model('Marker');

exports.list_all_markers = function(req, res) {
  Marker.find({}, function(err, marker) {
    if (err)
      res.send(err);
    res.json(marker);
  });
};


exports.create_a_marker = function(req, res) {
  var new_marker = new Marker(req.body);
  new_marker.save(function(err, marker) {
    if (err)
      res.send(err);
    res.json(marker);
  });
};


exports.read_a_marker = function(req, res) {
  Marker.findById(req.params.markerId, function(err, marker) {
    if (err)
      res.send(err);
    res.json(marker);
  });
};


exports.update_a_marker = function(req, res) {
  Marker.findOneAndUpdate({_id: req.params.markerId}, req.body, {new: true}, function(err, marker) {
    if (err)
      res.send(err);
    res.json(marker);
  });
};


exports.delete_a_marker = function(req, res) {
  Marker.remove({
    _id: req.params.markerId
  }, function(err, marker) {
    if (err)
      res.send(err);
    res.json({ message: 'Marker successfully deleted' });
  });
};
