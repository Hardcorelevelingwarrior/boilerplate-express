let express = require('express');
let app = express();
console.log("Hello World");
//Use bodyParser as middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.get("/",function(req,res){res.send("Hello Express")});
//Request for HTML
absoulutePathHTML=__dirname + "/views/index.html";
app.get("/",function(req,res){res.sendFile(absoulutePathHTML)});
//Request for assests like css
absoulutePathAssets=__dirname + "/public";
app.use("/public",express.static(absoulutePathAssets));
//Request for json data
app.get("/json",function(req,res){res.json({"message": "Hello json"})})
//Build logger
app.use(function middleware(req,res,next){
    res.send(req.method+" "+req.path+" - "+req.ip);
    next();
})
//Using chain to return current time
app.get("/now",function(req,res,next){
    req.time= new Date().toString();
    next();
  },function middleware(req,res){
    app.send(res.json({"time":req.time}))
  })

//Using : to take route parameter input
  app.get("/:word/echo",function(req,res){
    word=req.params.word
    app.send(res.json({"echo":word}))
  })
//Extracting data from json and take query para
  app.get("/name", function(req, res) {
    var firstName = req.query.first;
    var lastName = req.query.last;
    // Use template literals to form a formatted string
    res.json({
      name: firstName + " "+lastName
    });
  });

//Extracting data from post method
  app.post("/name", function (req,res){
    var string = req.body.first + " " + req.body.last;
    res.json({ name: string });
    });



























 module.exports = app;
