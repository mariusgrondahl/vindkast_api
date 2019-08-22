const express = require("express");
const router = express.Router();

router.get("/:id", (req,res,next)=> {
    Marker.findById(req.params.id, function(err, marker) {
      if (err)
        res.send(err);
      res.json(marker);
    });
})

module.exports = router;