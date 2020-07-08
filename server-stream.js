const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  const src = fs.createReadStream('./chaos.mp3');

  src.pipe(res);
});

server.listen(8000);

console.log('Stream Server is running...');
