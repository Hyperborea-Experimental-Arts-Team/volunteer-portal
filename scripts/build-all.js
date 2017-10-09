'use script';

const child = require('child_process');

const env = Object.assign({}, process.env, { NODE_ENV: 'production' });
const opts = { stdio: 'inherit', cwd: '.', shell: true, env };

child.spawn('yarn', [ 'client:build' ], opts);
child.spawn('yarn', [ 'server:build' ], opts);