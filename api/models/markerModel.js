var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MarkerSchema = new Schema({
  spot_name: {
    type: String,
    required: 'you must provide a name for your forecast'
  },

  desc: {
    type: String,
    required: 'Please provide a short description to make the site worth it'
  },

  lat: {
    type: String,
    required: 'you must provide a lat'
  },
  lng: {
    type: String,
    required: 'you must provide a lat'
  },

  img: {
    type: String,
    default: '/img/defaultspot.jpg'
  },

  creator: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User' 
  },
  
  north: { type: Boolean, default: false },
  north_east: { type: Boolean, default: false },
  east: { type: Boolean, default: false },
  south_east: { type: Boolean, default: false },
  south: { type: Boolean, default: false },
  south_west: { type: Boolean, default: false },
  west: { type: Boolean, default: false },
  north_west: { type: Boolean, default: false },

});


module.exports = mongoose.model('Marker', MarkerSchema);