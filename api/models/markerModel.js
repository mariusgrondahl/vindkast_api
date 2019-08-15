'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MarkerSchema = new Schema({
  lat: {
    type: String,
    required: 'you must provide a lat'
  },
  lng: {
    type: String,
    required: 'you must provide a lat'
  }
});


module.exports = mongoose.model('Marker', MarkerSchema);