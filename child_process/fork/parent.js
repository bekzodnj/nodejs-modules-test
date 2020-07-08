const { fork } = require('child_process');

const n = fork(`${__dirname}/child.js`);
console.log('Parent console');
n.on('message', (data) => console.log('Parent received:', data));

n.send({ hello: 'world' });
