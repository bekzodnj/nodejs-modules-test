const util = require('util');
const fs = require('fs');

/* 
	Nodejs useful methods
*/

// util
const isEqual = util.isDeepStrictEqual({ a: 1 }, { a: 1 });

// fs read file
fs.watchFile('./hello.txt', (file) => {
  fs.readFile('./hello.txt', 'utf-8', (err, data) => {
    if (err) {
      throw err;
    }

    console.log(file.size, data);
  });
});

// util promisify
const stats = util.promisify(fs.stat);

// default fs stats
// fs.stat('.', (err, stats) => {
//   console.log('With callback', stats);
// });

// there was some error in the promise

// the same as above with promisify
// stats.then((stats) => {
//   console.log('With promise', stats);
// });
