var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var MarkerSchema = new Schema({
  spot_name: {
    type: String,
    required: 'you must provide a name for your forecast'
  },

  lat: {
    type: String,
    required: 'you must provide a lat'
  },
  lng: {
    type: String,
    required: 'you must provide a lat'
  },

  by_user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },

  // Setting up windirections and Aler limit
  wind_range: {
    lower_bound: Number,
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