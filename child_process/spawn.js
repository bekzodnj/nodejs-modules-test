const { spawn } = require('child_process');

// execute 'git log' and pipe the result to the current process
spawn('git', ['log']).stdout.pipe(process.stdout);
