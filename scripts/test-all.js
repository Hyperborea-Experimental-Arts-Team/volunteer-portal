'use script';

const opts = { stdio: 'inherit', cwd: '.', shell: true };
const child = require('child_process');

child.spawn('yarn', [ 'client:test' ], opts);
//child.spawn('yarn', [ 'server:test' ], opts);

