'use strict';

const rmrf = require('rimraf');
const fs = require('fs-extra');
const Zip = require('adm-zip');
const paths = require('../config/paths');

console.log('Packaging...');

// Holy cleansing flames
rmrf.sync(paths.appDeploy);

(async function() {
  await fs.mkdir(paths.appDeploy);
  await fs.mkdir(`${paths.appDeploy}/web`);

  await Promise.all([
    fs.copy(`${paths.buildRoot}/client`, `${paths.appDeploy}/web/client`),
    fs.copy(`${paths.buildRoot}/server`, `${paths.appDeploy}/web/server`),
    // Ugh, the server really doesn't need all the node_modules...
    fs.copy(paths.appPackageJson, `${paths.appDeploy}/web/package.json`),
    fs.copy(paths.config, `${paths.appDeploy}/web/config`, { filter: src => src.endsWith('.json') || src.endsWith('/config') })
  ]);

  const archive = new Zip();
  archive.addLocalFolder(`${paths.appDeploy}/web`);
  archive.writeZip(`${paths.appDeploy}/deploy.zip`);
})();



