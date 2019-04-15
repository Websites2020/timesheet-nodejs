const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
var database = require("./database");
var MongoClient = require('mongodb').MongoClient;
// var url = process.env.MONGODB_URI2;
// var url = "mongodb://localhost:27017/";

app.use(express.static('public'));

app.get('/employee/:id', function(req, res){
    console.log(req.params.id);
    var employeeNo = req.params.id;

    MongoClient.connect(process.env.MONGODB_URI2, { useNewUrlParser: true }, function(err, db) {
    // MongoClient.connect("mongodb://localhost:27017/", { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("heroku_lsmczchn");
        // var dbo = db.db("mydb");
        dbo.collection(employeeNo).find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
          if (err) throw err;
          // res.send(result);
          res.json(result);
          console.log("data sent");
          db.close();
        });
      });
});

app.post('/updatein/:id/:text', function(req, res){
  console.log(req.params.id + req.params.text);
  var timeID = req.params.id;
  var employee = req.params.text;
MongoClient.connect(process.env.MONGODB_URI2, function(err, db) {
// MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_lsmczchn");
  // var dbo = db.db("mydb");
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1
    var day = currentDate.getDate()
    var year = currentDate.getFullYear()
    var date = month + "/" + day + "/" + year;
    console.log(date);
    var currentHour = new Date();
    var hour = currentHour.getHours();
    console.log(hour);
    var currentMin = new Date();
    var min = currentMin.getMinutes();
    console.log(min);
  var myobj = {  _id: timeID, date: date, starthh: hour, startmm: min, endhh: '', endmm: ''};
  dbo.collection(employee).insertOne(myobj, function(err, result) {
    if (err) throw err;
    res.json(result);
    console.log("1 document inserted");
    db.close();
  });
});
});

app.post('/updateout/:id/:text', function(req, res){
  console.log(req.params.id + req.params.text);
  var timeID = req.params.id;
  var employee = req.params.text;
MongoClient.connect(process.env.MONGODB_URI2, function(err, db) {
// MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
  if (err) throw err;
  var dbo = db.db("heroku_lsmczchn");
  // var dbo = db.db("mydb");
    var currentDate = new Date();
    var month = currentDate.getMonth() + 1
    var day = currentDate.getDate()
    var year = currentDate.getFullYear()
    var date = month + "/" + day + "/" + year;
    console.log(date);
    var currentHour = new Date();
    var hour = currentHour.getHours();
    console.log(hour);
    var currentMin = new Date();
    var min = currentMin.getMinutes();
    console.log(min);
  var myobj = {  _id: timeID };
  var endtime = {$set: {endhh: hour, endmm: min} }
  dbo.collection(employee).updateOne(myobj, endtime, function(err, result) {
    if (err) throw err;
    res.json(result);
    console.log("1 document updated");
    db.close();
  });
});
});

app.post('/delete/:id', function(req, res){
MongoClient.connect(process.env.MONGODB_URI2, function(err, db) {
// MongoClient.connect("mongodb://localhost:27017/mydb", function(err, db) {
  // var employeeNo = req.params.id;
  if (err) throw err;
  var dbo = db.db("heroku_lsmczchn");
  var dbo = db.db("mydb");
  dbo.dropCollection(employeeNo, function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("employee1 Collection deleted");
    res.json(delOK);
    db.close();
  });
});
});

app.listen(port, () => console.log(`Time Sheet app listening on port ${port}!`));