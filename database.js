var MongoClient = require('mongodb').MongoClient;
// var url = encodeURI(process.env.MONGODB_URI2);
// var url = "mongodb://localhost:27017/";
// var urlB = process.env.MONGODB_URI;
// var urlB = "mongodb://localhost:27017/mydb";

// MongoClient.connect(urlB, function(err, db) {
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("heroku_lsmczchn");
//     dbo.createCollection("employee1", function(err, res) {
//         if (err) throw err;
//         console.log("employee1 Collection created!");
//         db.close();
//     });
// });

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("heroku_lsmczchn");
//     dbo.createCollection("employee2", function(err, res) {
//         if (err) throw err;
//         console.log("employee2 Collection created!");
//         db.close();
//     });


// MongoClient.connect(process.env.MONGODB_URI2, { useNewUrlParser: true }, function(err, db) {
// MongoClient.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     // var dbo = db.db("heroku_lsmczchn");
//     var dbo = db.db("mydb");
//     var myobj = [
//         { _id: 1, date: '04/01/2019', starthh: 9, startmm: 10, endhh: 12, endmm: 10},
//         { _id: 2, date: '04/01/2019', starthh: 13, startmm: 30, endhh: 17, endmm: 30},
//         { _id: 3, date: '04/02/2019', starthh: 9, startmm: 20, endhh: 12, endmm: 20},
//         { _id: 4, date: '04/02/2019', starthh: 13, startmm: 50, endhh: 17, endmm: 50}
//     ];
//       dbo.collection("employee1").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("employee1 Number of documents inserted: " + res.insertedCount);
//         db.close();
//       });
//   }); 

//   // MongoClient.connect(process.env.MONGODB_URI2, { useNewUrlParser: true }, function(err, db) {
//   MongoClient.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true }, function(err, db) {
//     if (err) throw err;
//     // var dbo = db.db("heroku_lsmczchn");
//     var dbo = db.db("mydb");
//     var myobj = [
//         { _id: 1, date: '04/04/2019', starthh: 9, startmm: 50, endhh: 12, endmm: 50},
//         { _id: 2, date: '04/04/2019', starthh: 13, startmm: 20, endhh: 17, endmm: 20},
//         { _id: 3, date: '04/05/2019', starthh: 9, startmm: 30, endhh: 12, endmm: 30},
//         { _id: 4, date: '04/05/2019', starthh: 13, startmm: 10, endhh: 17, endmm: 10}
//     ];
//       dbo.collection("employee2").insertMany(myobj, function(err, res) {
//         if (err) throw err;
//         console.log("employee2 Number of documents inserted: " + res.insertedCount);
//         db.close();
//       });
//   });