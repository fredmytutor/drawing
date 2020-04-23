#!/usr/bin/env node

const { program } = require('commander');
const { askName } = require('../utils/prompts.js');

program
  .command('create')
  .description('Create something')
  .action(askName);

program.parse(process.arvg);
