const express = require('express');
const path = require('path');
const fs = require('fs');
const exphbs  = require('express-handlebars');

const app = express();

app.use(express.static('public'));

app.engine('html', exphbs({ extname: '.html' }));
app.set('view engine', 'handlebars');

const displayCase = (elem) => elem.replace(/_/g, ' ');

app.get('/', (req, res) => {
  fs.readdir(__dirname + '/public/sketches', (err, filesPath) => {
    res.render('home.html', {
      sketches: filesPath.map(path => (
        {
          slug: path,
          name: displayCase(path),
        }
      )) 
    });
  })
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
