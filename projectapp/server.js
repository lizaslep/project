var express = require("express");
var bodyParser=require("body-parser");
var userController = require('./controllers/userController');
var iotController = require('./controllers/iotController');
var iots = require('./routes/iots');
var users = require('./routes/users');
var passport = require('passport');
var app = express();

var fs=require('fs');
var https= require('https');
var privateKey=fs.readFileSync('ssl/server.key','utf-8');
var certificate = fs.readFileSync('ssl/server.crt','utf-8');
var credentials={key:privateKey,cert:certificate,passphrase:'123456'};
app.use(express.static(__dirname + "/public"));
// var urlencodedParser = bodyParser.urlencoded({extended: true});


// app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, authorization');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
//console.log("ok");
app.use('/users', users);
app.use('/iots', iots);

//console.log("o0k");
// app.post("/signup",userController.signUp);
// app.post("/signin",userController.signIn);

// app.post("/iot",iotController.addDevice);

// app.get("/user/:user",userController.getUserIots);
// app.post("/:user",userController.addIotToUser);
// app.get("/main",iotController.getAllIots);
// var httpsServer=https.createServer(app);
// httpsServer.listen(3000,function(){
//   console.log('listening...');
// });
app.listen(3000,function(){
  console.log('listening...');
});
