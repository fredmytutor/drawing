const fs = require('fs');

const schemaManager = {
  addSketch: function(sketchName, slug) {
    let content = JSON.parse(fs.readFileSync('./config.json', 'utf8'));
    const sketch = {
      slug,
      name: sketchName,
    }
    content.sketches.push(sketch);
    fs.writeFileSync('./config.json', JSON.stringify(content, null, 2));
  }
};

module.exports = schemaManager;
