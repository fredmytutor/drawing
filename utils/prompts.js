const inquirer = require('inquirer');
const { createSketch, deleteSketch } = require('./sketchManager.js');
const { getSketches } = require('./schemaManager.js');

const prompts = {
  create: () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What\'s the name',
      }
    ]).then(answers => {
      createSketch(answers.name);
    });
  },

  remove: () => {
    inquirer.prompt([
      {
        type: 'list',
        name: 'sketch',
        message: 'Which one',
        choices: getSketches(),
      }
    ]).then(answers => {
      deleteSketch(answers.sketch);
    });
  },
};

module.exports = prompts;
