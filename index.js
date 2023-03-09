const express = require("express");
const fs = require("fs");
const path = require('path');

const api = express ();

const PORT  = 4000 ||  process.env.PORT;

api.use("/static", express.static('public'));

api.get("/api/v1/facebook", (req,res)=> {
    const facebookSocial = {
        username: "piyushkumar",
        followers: 33,
        following: 12,
        request_date:  new Date().toUTCString(),
    }
    res.status(200).json({facebookSocial});
})
api.get("*", (req, res)=> {
    // res.status(200).json({params: req.body})
    res.sendFile(path.join(__dirname, "./index.html"))
})




// to start the server at the defined port we use .listen() method OR
// the port we need to hit to connect to server for getting api response or setting path to run APIs
api.listen(PORT, ()=> {
    console.log(`Server started at ${PORT}`);
});

