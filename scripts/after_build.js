#!/usr/bin/env node
const pathModule = require('path');
const fsModule = require('fs');

/**
 * 复制README.md
 */
fsModule.copyFileSync(
  pathModule.resolve('README.md'),
  pathModule.resolve('dist/README.md'),
);
