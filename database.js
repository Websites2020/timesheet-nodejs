var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI2;
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
//     // var dbo = db.db("heroku_lsmczchn");
//     var dbo = db.db("mydb");
//     dbo.dropCollection("employee1", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("employee1 Collection deleted");
//       db.close();
//     });
//   });

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     // var dbo = db.db("heroku_lsmczchn");
//     var dbo = db.db("mydb");
//     dbo.dropCollection("employee2", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("employee2 Collection deleted");
//       db.close();
//     });
//   });
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


MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_lsmczchn");
    // var dbo = db.db("mydb");
    var myobj = [
        { date: '04/01/2019', starthh: 9, startmm: 10, endhh: 12, endmm: 10},
        { date: '04/01/2019', starthh: 13, startmm: 30, endhh: 17, endmm: 30},
        { date: '04/02/2019', starthh: 9, startmm: 20, endhh: 12, endmm: 20},
        { date: '04/02/2019', starthh: 13, startmm: 50, endhh: 17, endmm: 50},
        { date: '04/03/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/03/2019', starthh: 13, startmm: 20, endhh: 17, endmm: 20},
        { date: '04/04/2019', starthh: 9, startmm: 40, endhh: 12, endmm: 40},
        { date: '04/04/2019', starthh: 13, startmm: 30, endhh: 17, endmm: 30},
        { date: '04/05/2019', starthh: 9, startmm: 10, endhh: 12, endmm: 10},
        { date: '04/05/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/08/2019', starthh: 9, startmm: 50, endhh: 12, endmm: 50},
        { date: '04/08/2019', starthh: 13, startmm: 10, endhh: 17, endmm: 10},
        { date: '04/09/2019', starthh: 9, startmm: 10, endhh: 12, endmm: 10},
        { date: '04/09/2019', starthh: 13, startmm: 30, endhh: 17, endmm: 30}
    ];
    dbo.collection("employee1").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("employee1 Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("heroku_lsmczchn");
    // var dbo = db.db("mydb");
    var myobj = [
        { date: '04/04/2019', starthh: 9, startmm: 50, endhh: 12, endmm: 50},
        { date: '04/04/2019', starthh: 13, startmm: 20, endhh: 17, endmm: 20},
        { date: '04/05/2019', starthh: 9, startmm: 30, endhh: 12, endmm: 30},
        { date: '04/05/2019', starthh: 13, startmm: 10, endhh: 17, endmm: 10},
        { date: '04/11/2019', starthh: 9, startmm: 10, endhh: 12, endmm: 10},
        { date: '04/11/2019', starthh: 13, startmm: 40, endhh: 17, endmm: 40},
        { date: '04/12/2019', starthh: 9, startmm: 20, endhh: 12, endmm: 20},
        { date: '04/12/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/18/2019', starthh: 9, startmm: 50, endhh: 12, endmm: 50},
        { date: '04/18/2019', starthh: 13, startmm: 30, endhh: 17, endmm: 30},
        { date: '04/19/2019', starthh: 9, startmm: 40, endhh: 12, endmm: 40},
        { date: '04/19/2019', starthh: 13, startmm: 20, endhh: 17, endmm: 20},
        { date: '04/25/2019', starthh: 9, startmm: 30, endhh: 12, endmm: 30},
        { date: '04/25/2019', starthh: 13, startmm: 10, endhh: 17, endmm: 10}
    ];
    dbo.collection("employee2").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("employee2 Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  });
