const fs = require('fs');

const configPath = './config.json';

const loadConfig = () => JSON.parse(fs.readFileSync(configPath, 'utf8'));

const writeConfig = content => (
  new Promise((resolve, reject) => (
    fs.writeFile(configPath, JSON.stringify(content, null, 2), resolve)
  ))
)

const schemaManager = {
  addSketch: (sketchName, slug) => {
    const sketch = {
      slug,
      name: sketchName,
    }

    let content = loadConfig();
    content.sketches.push(sketch);

    return writeConfig(content);
  },

  getSketches: () => {
    return loadConfig().sketches;
  },

  removeSketch: (slug) => {
    let content = loadConfig();

    content.sketches = content.sketches.filter(sketch => sketch.slug != slug);

    return writeConfig(content);
  },
};

module.exports = schemaManager;
