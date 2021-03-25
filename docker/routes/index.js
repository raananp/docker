var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://admin:secret@localhost:27017";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/user_info', function (req, res) {
  console.log(req.body)



  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydbtest");
    var myobj = { name: req.body.fname, lastname: req.body.lname };
    dbo.collection("users").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });


  res.redirect('/')

})

module.exports = router;
