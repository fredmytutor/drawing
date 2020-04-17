const express = require('express');
const path = require('path');
const fs = require('fs');
const mustacheExpress = require('mustache-express');

const app = express();

app.use(express.static('public'));

app.engine('html', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

const displayCase = (elem) => elem.replace(/_/g, ' ');

app.get('/', (req, res) => {
  fs.readdir(__dirname + '/public/sketches', (err, filesPath) => {
    res.render('index.html', {
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
