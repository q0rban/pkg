#!/usr/bin/env node

'use strict';

const assert = require('assert');
const utils = require('../utils.js');

assert(!module.parent);
assert(__dirname === process.cwd());

const latest = `node${process.version[1]}`;
const input = './test-x-index.js';
let arch = process.arch; // TODO extract arch from `target` once it contains
arch = { ia32: 'x86' }[arch] || arch;

const newcomers = [
  `test-x-index.js-${latest}-linux-${arch}`,
  `test-x-index.js-${latest}-osx-${arch}`,
  `test-x-index.js-${latest}-win-${arch}.exe`
];

const before = utils.filesBefore(newcomers);

utils.pkg.sync([
  input
]);

utils.filesAfter(before, newcomers);