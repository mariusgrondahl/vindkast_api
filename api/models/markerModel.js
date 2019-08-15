'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MarkerSchema = new Schema({
  wind_range: {
      lower_bound: Number,
  }, 
  wind_direction: { 
    north: Boolean,
    northeast: Boolean,
    east: Boolean,
    southeast: Boolean,
    south: Boolean,
    southwest: Boolean,
    west: Boolean,
    northwest: Boolean,
}, 
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