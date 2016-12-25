const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs');

MongoClient.connect('mongodb://flbarfield:rickyb14@ds147965.mlab.com:47965/learning_quotes', (err, database) => {
  if (err) return console.log(err);
  db = database;

  app.get('/', (req, res) => {
    db.collection('quotes').find().toArray((err, result) => {
      if (err) return console.log(err)
      res.render('index.ejs', {quotes: result});
    })
  })

  app.listen(3000, function () {
    console.log('listening on 3000');
  })
})

app.use(bodyParser.urlencoded({extended:true}))

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

// app.post('/quotes', (req, res) => {
//   console.log('HELOOOOOOOOOOLLOOLOLOLL!O')
// })

app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err,result) => {
    if (err) return console.log(err);

    console.log('Saved to database!');
    res.redirect('/');
  })
})
