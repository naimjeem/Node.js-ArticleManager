const express = require('express');
const path = require('path');

//Express App Init
const app = express();

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Home Route
app.get('/', (req, res) => {
  res.render('index');
});

//Start Server
app.listen(3000, () => {
  console.log("server is running on on port 3000...");
});
