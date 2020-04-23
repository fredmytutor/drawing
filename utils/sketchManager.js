const { mkdir, write, load } = require('./fileManager.js');
const { addSketch } = require('./schemaManager.js');
const path = require('path');

const templates = [
  path.join(__dirname, 'templates/index.html'),
  path.join(__dirname, 'templates/sketch.js'),
];

const generateSlug = (name) => (
  name.replace(/\s+/g, '_').toLowerCase()
);

const generator = {
  createSketch: (name) => {
    const slug = generateSlug(name);
    const sketchPath = `public/sketches/${slug}`;

    mkdir(sketchPath)
      .then(() => (
        Promise.all(templates.map(template => (
          load(template)
        )))
      ))
      .then(files => (
        Promise.all(files.map(([fileName, content]) => (
          write(path.resolve(sketchPath, fileName), content)
        )))
      ))
      .then(() => (
        addSketch(name, slug)
      ))
      .then(() => console.log('Finished'))
      .catch(err => {
        console.log(err);
      });
  }
};

module.exports = generator;
