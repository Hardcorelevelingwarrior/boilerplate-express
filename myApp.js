let express = require('express');
let app = express();
console.log("Hello World");
//app.get("/",function(req,res){res.send("Hello Express")});
absoulutePathHTML=__dirname + "/views/index.html";
app.get("/",function(req,res){res.sendFile(absoulutePathHTML)});

absoulutePathAssets=__dirname + "/public";
app.use("/public",express.static(absoulutePathAssets));





































 module.exports = app;
