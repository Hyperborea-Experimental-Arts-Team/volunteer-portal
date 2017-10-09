'use script';

const opts = { stdio: 'inherit', cwd: '.', shell: true };
const child = require('child_process');

child.spawn('yarn', [ 'client:build' ], opts);
child.spawn('yarn', [ 'server:build' ], opts);