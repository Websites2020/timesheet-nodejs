var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var urlB = "mongodb://localhost:27017/mydb";

MongoClient.connect(urlB, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.dropCollection("employee1", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("employee1 Collection deleted");
//       db.close();
//     });
//   });

//   MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.dropCollection("employee2", function(err, delOK) {
//       if (err) throw err;
//       if (delOK) console.log("employee2 Collection deleted");
//       db.close();
//     });
//   }); 

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("employee1", function(err, res) {
        if (err) throw err;
        console.log("employee1 Collection created!");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("employee2", function(err, res) {
        if (err) throw err;
        console.log("employee2 Collection created!");
        db.close();
    });
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { date: '04/01/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/01/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/02/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/02/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/03/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/03/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/04/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/04/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/05/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/05/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/06/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/06/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/07/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/08/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00}
    ];
    dbo.collection("employee1").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("employee1 Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { date: '04/01/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/01/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/02/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/02/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/03/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/03/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/04/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/04/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/05/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/05/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/06/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/06/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00},
        { date: '04/07/2019', starthh: 9, startmm: 00, endhh: 12, endmm: 00},
        { date: '04/08/2019', starthh: 13, startmm: 00, endhh: 17, endmm: 00}
    ];
    dbo.collection("employee2").insertMany(myobj, function(err, res) {
      if (err) throw err;
      console.log("employee2 Number of documents inserted: " + res.insertedCount);
      db.close();
    });
  }); 