const fs = require('fs');

const configPath = './config.json';
const loadConfig = () => JSON.parse(fs.readFileSync(configPath, 'utf8'));

const schemaManager = {
  addSketch: function(sketchName, slug) {
    const sketch = {
      slug,
      name: sketchName,
    }

    let content = loadConfig();
    content.sketches.push(sketch);

    fs.writeFileSync(configPath, JSON.stringify(content, null, 2));

    return content;
  },

  getSketches: function() {
    return loadConfig().sketches;
  }
};

module.exports = schemaManager;
