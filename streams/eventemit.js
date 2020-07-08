const EventEmitter = require('events');

const server = new EventEmitter();

server.on('request', () => console.log('New request'));

server.emit('request');
server.emit('request');
