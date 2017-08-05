const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/nodekb');
let db = mongoose.connection;

db.open('open', () => {
  console.log("Connected to MongoDB");
});

db.error('error', (err) => {
  console.log(err);
});

//Express App Init
const app = express();

//Bring in models
let Article = require('./models/article');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req, res) => {

  Article.find({}, (err, articles) => {
    if (err) {
      throw err;
    }
    res.render('index', {
      title: 'Knowledgebase',
      articles: articles
    });
  });

});

//Add Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add Article'
  });
});

//Start Server
app.listen(3000, () => {
  console.log("server is running on on port 3000...");
});
