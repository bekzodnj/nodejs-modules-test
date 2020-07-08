const { exec } = require('child_process');

exec('git log --format="%s" | grep files', (err, out) => {
  if (err) {
    console.log(err);
  } else {
    console.log(out);
  }
});
