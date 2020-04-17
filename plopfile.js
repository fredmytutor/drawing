module.exports = (plop) => {
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
    ],
  });
}
