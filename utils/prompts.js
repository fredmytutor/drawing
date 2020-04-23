const inquirer = require('inquirer');
const { createSketch } = require('./sketchManager.js');

const prompts = {
  askName: () => {
    inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What\'s the name'
      }
    ]).then(answers => {
      createSketch(answers.name);
    });
  }
};

module.exports = prompts;
