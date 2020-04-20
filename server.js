const express = require('express');
const exphbs  = require('express-handlebars');
const { getSketches } = require('./utils/schemaManager');

const app = express();

app.use(express.static('public'));

app.engine('html', exphbs({ extname: '.html' }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home.html', {
    sketches: getSketches(),
  });
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
