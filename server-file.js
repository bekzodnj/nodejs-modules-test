const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  fs.readFile('./chaos.mp3', (err, data) => {
    if (err) throw err;

    res.end(data);
  });
});

server.listen(8000);

console.log('Running...');
