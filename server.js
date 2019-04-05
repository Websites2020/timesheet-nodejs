const express = require('express');
const app = express();
const port = 8080;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use(express.static('public'))

app.get('/employee/:id', function(req, res){
    console.log(req.params.id);
    var employeeNo = req.params.id;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        dbo.collection(employeeNo).find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
          if (err) throw err;
          // res.send(result);
          res.json(result);
          console.log("data sent");
          db.close();
        });
      });
});

// NEW: Handle request for a list of all books
// app.get('/books', function(req, res){
//   res.send('A list of books should go here');
// });

// app.get('*', function(req, res){
//   res.send('Hello World');
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))