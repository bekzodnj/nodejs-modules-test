const http = require('http');

http
  .createServer((req, res) => {
    return res.end('Hello server: ');
  })
  .listen(3000);

console.log('Server is running...');
