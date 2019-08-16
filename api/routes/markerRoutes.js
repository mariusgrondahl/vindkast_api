const express = require("express");
const router = express.Router();
var session = require('express-session');
const Marker = require("../models/markerModel");
var createError = require('http-errors');


router.post("/create", (req,res,next)=> {   
    Marker.create(req.body)
        .then((marker)=> {
            let {lat, lng, spotname, wind_direction, wind_limit} = marker;
            let sessionData = {username, email, firstname, lastname, id};
            console.log("Created Marker");
        })
        .catch((error)=> {
            if(error.name === "ValidationError") next(createError(400, error.message))
            else next(createError(500));
        })
})

router.get("/all-markers", (req,res,next)=>  {
    Marker.find({}, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})
  
  
router.get("/creating", (req,res,next)=>  {

})
  
  
router.get("/:id", (req,res,next)=> {
    Marker.findById(req.params.markerId, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})
  
  
router.get("/update", (req,res,next)=>  {
    Marker.findOneAndUpdate({_id: req.params.markerId}, req.body, {new: true}, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})
  
  
  exports.delete_a_marker = function(req, res) {
    Marker.remove({
      _id: req.params.markerId
    }, function(err, marker) {
      if (err)
        res.send(err);
      res.json({ message: 'Marker successfully deleted' });
    });
  };
  



module.exports = router;