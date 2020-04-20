const { addSketch } = require('./utils/schemaManager.js');

module.exports = (plop) => {
  plop.setActionType('addSketchToSchema', (answers, config, plop) => {
    const name = plop.renderString(config.name, answers);
    const slug = plop.renderString(config.slug, answers);
    addSketch(name, slug);
    return 'Added sketch to schema';
  });

  plop.setGenerator('sketch', {
    description: 'Create a new sketch',
    prompts: [{
      type: 'input',
      name: 'name',
      message: 'What is the sketch name',
    }],
    actions: [
      {
        type: 'add',
        path: 'public/sketches/{{snakeCase name}}/index.html',
        templateFile: 'templates/index.html',
      },
      {
        type: 'add',
        path: 'public/sketches/{{snakeCase name}}/sketch.js',
        templateFile: 'templates/sketch.js',
      },
      {
        type: 'addSketchToSchema',
        name: '{{name}}',
        slug: '{{snakeCase name}}',
      }
    ],
  });
}
