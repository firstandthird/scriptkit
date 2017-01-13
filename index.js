#!/usr/bin/env node

const runkit = require('runkit');
const path = require('path');
const startCase = require('lodash.startcase');

const libraryPkg = require(path.join(process.cwd(), 'package.json'));

runkit({
  name: 'es6kit',
  configPaths: [
    path.join(__dirname, 'runkit')
  ],
  context: {
    fileName: libraryPkg.name,
    libraryName: startCase(libraryPkg.name).replace(/ /g, ''),
    entrypoint: libraryPkg.es6kit.entrypoint
  }
});
