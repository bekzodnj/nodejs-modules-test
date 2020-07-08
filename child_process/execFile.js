const { execFile } = require('child_process');

// similar to spawn but output is buffered to the string
// uses RAM to store the buffered data
execFile('git', ['log'], (err, out) => {
  if (err) {
    console.log(err);
  } else {
    console.log(out);
  }
});
