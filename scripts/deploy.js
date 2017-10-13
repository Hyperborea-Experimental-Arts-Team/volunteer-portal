'use strict';

const rmrf = require('rimraf');
const fs = require('fs');
const paths = require('../config/paths');

console.log('Deploying...');

rmrf.sync(paths.appDeploy);
fs.mkdirSync(paths.appDeploy);

// Copy the stuff we need to