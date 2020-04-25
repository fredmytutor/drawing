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
        type: 'addMany',
        abortOnFail: true,
        templateFiles: 'templates/**',
        base: 'templates',
        destination: 'public/sketches/{{snakeCase name}}/',
      },
      {
        type: 'addSketchToSchema',
        name: '{{name}}',
        slug: '{{snakeCase name}}',
      }
    ],
  });
}