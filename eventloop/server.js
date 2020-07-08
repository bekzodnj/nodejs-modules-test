const http = require('http');

http.createServer((req, res) => res.end('Hello World')).listen(3000);

function compute() {
  for (let i = 0; i < 1000; i++) {
    console.log(`Computing i=${i}...`);

    //setImmediate(compute);
    Promise.resolve().then(compute);
  }
}

compute();
