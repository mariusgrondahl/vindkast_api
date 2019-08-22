const express = require("express");
const router = express.Router();
const User = require("../models/userModel");

router.get("/:id", (req,res,next)=> {
    User.findById(req.params.id, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    });
})


router.get("/:id/delete", (req,res,next)=>  {
    User.remove({
        _id: req.params.id
      }, function(err, user) {
        if (err)
          res.send(err);
        res.json({ message: 'User successfully deleted' });
      });
})
  
module.exports = router;