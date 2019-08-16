const express = require("express");
const router = express.Router();
var session = require('express-session');
const User = require("../models/userModel");
var createError = require('http-errors');


router.post("/signup", (req,res,next)=> {   
    User.create(req.body)
        .then((user)=> {
            let {username, email, firstname, lastname, id} = user;
            let sessionData = {username, email, firstname, lastname, id};
            req.session.user = sessionData;
            res.status(200).json(sessionData);
            console.log("Signed up");
        })
        .catch((error)=> {
            if(error.name === "ValidationError") next(createError(400, error.message))
            else next(createError(500));
        })
})


router.post("/login", (req,res,next)=> {
    User.findOne({$or: [{username: req.body.username}]})
        .then((user)=> {
            if(!user) next(createError(401), "Invalid credentials.");
            else {
            return user.comparePasswords(req.body.password)
                .then((match)=> {
                    if(match) {
                        let {username, email, firstname, lastname, id} = user;
                        let sessionData = {username, email, firstname, lastname, id};
                        req.session.user = sessionData;
                        res.status(200).json(sessionData);
                    } else {
                        next(createError(401, "Invalid credentials 2."));
                    }
                })
            }
        })
        .catch((error)=> {
            next(createError(500));
        })
})

 router.get("/logout", (req,res, next)=> {
     req.session.destroy();
     res.status(205).end();
     console.log("Logga ut")
 })

module.exports = router;