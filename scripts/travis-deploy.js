'use strict';

const { fork, spawn } = require('child_process');

function promisify(command) {
  return function() {
    const args = arguments;
    return new Promise((resolve, reject) => {
      const process = command(...args);
      let resolved = false;

      if (process.stdout) {
        process.stdout.setEncoding('utf8');
        process.stdout.on('data', log => console.log(log.toString()));
        process.stderr.on('data', error => console.error(error.toString()));
      }

      process.on('error', function (err) {
        if (resolved) { return; }
        resolved = true;
        reject(err);
      });

      process.on('exit', function (code) {
        if (resolved) { return; }
        resolved = true;
        resolve(code)
      });
    });
  };
}

async function deploy() {
  // Build the package
  let code = await promisify(fork)('scripts/package.js');
  if (code !== 0) {
    console.error("Could not build package", code);
    process.exit(1);
  }

  // Upload the package
  code = await promisify(spawn)('scp', [
    '-oStrictHostKeyChecking=no',
    '-i',
    'deploy-key',
    './deploy/deploy.zip',
    'deploy@staging.empire.tk:~/'
  ]);
  if (code !== 0) {
    console.error("Could not upload package", code);
    process.exit(1);
  }

  // Install the package
  code = await promisify(spawn)('ssh', [
    '-oStrictHostKeyChecking=no',
    '-i',
    'deploy-key',
    'deploy@staging.empire.tk',
    '\'rm -rf ./web && unzip ./deploy.zip -d web && cd web && yarn install --production && (pm2 restart coup || NODE_ENV=production pm2 start --name="coup" ./server/index.js)\''
  ], { shell: true });
  if (code !== 0) {
    console.error("Could not install package", code);
    process.exit(1);
  }
}

console.log(":::TEST:::");
console.log(process.env.TRAVIS_PULL_REQUEST);
console.log(":::TEST:::");

if (process.env.TRAVIS_PULL_REQUEST) {
  // Don't deploy for pull requests
  console.info('Pull request detected. Skipping deploy step.');
  process.exit();
}

deploy();





