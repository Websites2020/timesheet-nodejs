const express = require('express');
const app = express();
const port = 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var urlB = "mongodb://localhost:27017/mydb";

MongoClient.connect(urlB, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("employee1", function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  });

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.dropCollection("employee2", function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  }); 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("employee1", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("employee2", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
      { date: '', start: 'John', end: 'Highway 71'},
      { date: '', start: 'Peter', end: 'Lowstreet 4'},
      { date: '', start: 'Amy', end: 'Apple st 652'},
      { date: '', start: 'Hannah', end: 'Mountain 21'},
      { date: '', start: 'Michael', end: 'Valley 345'},
      { date: '', start: 'Sandy', end: 'Ocean blvd 2'},
      { date: '', start: 'Betty', end: 'Green Grass 1'},
      { date: '', start: 'Richard', end: 'Sky st 331'},
      { date: '', start: 'Susan', end: 'One way 98'},
      { date: '', start: 'Vicky', end: 'Yellow Garden 2'},
      { date: '', start: 'Ben', end: 'Park Lane 38'},
      { date: '', start: 'William', end: 'Central st 954'},
      { date: '', start: 'Chuck', end: 'Main Road 989'},
      { date: '', start: 'Viola', end: 'Sideway 1633'}
    ];
    dbo.collection("employee1").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { date: '', start: 'John', end: 'Highway 71'},
        { date: '', start: 'Peter', end: 'Lowstreet 4'},
        { date: '', start: 'Amy', end: 'Apple st 652'},
        { date: '', start: 'Hannah', end: 'Mountain 21'},
        { date: '', start: 'Michael', end: 'Valley 345'},
        { date: '', start: 'Sandy', end: 'Ocean blvd 2'},
        { date: '', start: 'Betty', end: 'Green Grass 1'},
        { date: '', start: 'Richard', end: 'Sky st 331'},
        { date: '', start: 'Susan', end: 'One way 98'},
        { date: '', start: 'Vicky', end: 'Yellow Garden 2'},
        { date: '', start: 'Ben', end: 'Park Lane 38'},
        { date: '', start: 'William', end: 'Central st 954'},
        { date: '', start: 'Chuck', end: 'Main Road 989'},
        { date: '', start: 'Viola', end: 'Sideway 1633'}
    ];
    dbo.collection("employee2").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 

app.use(express.static('public'))


app.get('/employee', function(req, res){
    console.log('Employee Name: ' + req.query['employeeList']);

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection(req.query).find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
          if (err) throw err;
          res.send(result);
          db.close();
        });
      });

    
});

// NEW: Handle request for a list of all books
// app.get('/books', function(req, res){
//   res.send('A list of books should go here');
// });

// Route for everything else.
app.get('*', function(req, res){
  res.send('Hello World');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))