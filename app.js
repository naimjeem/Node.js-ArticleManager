const express = require('express');
const path = require('path');

//Express App Init
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req, res) => {

  let articles = [
    {
      id: 1,
      title: 'First Article',
      author: 'Naim Jeem',
      body: `This is content for article one which is created by Naim Jeem`
    },
    {
      id: 2,
      title: 'Second Article',
      author: 'Naim Jeem',
      body: `This is content for article one which is created by Naim Jeem`
    },
    {
      id: 3,
      title: 'Third Article',
      author: 'Naim Jeem',
      body: `This is content for article one which is created by Naim Jeem`
    },
    {
      id: 4,
      title: 'Fourth Article',
      author: 'Ibrahim Zahin',
      body: `This is content for article one which is created by Naim Jeem`
    },
    {
      id: 5,
      title: 'Fifth Article',
      author: 'Ilham Zaara',
      body: `This is content for article one which is created by Naim Jeem`
    }
  ];

  res.render('index', {
    title: 'Knowledgebase',
    articles: articles
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
