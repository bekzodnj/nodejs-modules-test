const fs = require('fs');

let data = null;

fs.readFile('./hello.txt', (err, fileData) => {
  if (err) throw err;

  data = fileData;
  console.log('Inside readFile', data);
});

console.log('Outside readFile', data);
