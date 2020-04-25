#!/usr/bin/env node

const { program } = require('commander');
const { create, remove } = require('../utils/prompts.js');

program
  .command('create')
  .description('Create something')
  .action(create);

program
  .command('delete')
  .description('Delete something')
  .action(remove);

program.parse(process.arvg);
