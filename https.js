const https = require('https');

https
  .get('https://jsonplaceholder.typicode.com/todos', (response) => {
    let todo = '';
    let counter = 0;
    response.on('data', (chunk) => {
      todo += chunk;
    });

    response.on('end', () => {
      console.log(JSON.parse(todo));
    });
  })
  .on('error', (error) => console.log(error.message));
