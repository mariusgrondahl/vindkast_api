const express = require("express");
const router = express.Router();
var session = require('express-session');
const Marker = require("../models/markerModel");
var createError = require('http-errors');


router.post("/create", (req,res,next)=> {   
    Marker.create(req.body)
        .then((marker)=> {
            let {spot_name, desc, lat, lng, img, north, north_east, east, south_east, south, south_west, west, north_west} = marker;
            res.send(marker);
        })

        .catch((error)=> {
            res.send(error);
        })
})

router.get("/all-markers", (req,res,next)=>  {
    Marker.find({}, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})
  
  
router.get("/:id", (req,res,next)=> {
    Marker.findById(req.params.id, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})
  

// Need to sort this out
router.get("/:id/update", (req,res,next)=>  {
    Marker.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})

router.get("/:id/delete", (req,res,next)=>  {
    Marker.remove({
        _id: req.params.id
      }, function(err, marker) {
        if (err)
          res.send(err);
        res.json({ message: 'Marker successfully deleted' });
      });
})
  

module.exports = router;