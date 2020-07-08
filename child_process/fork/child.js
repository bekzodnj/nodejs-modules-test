process.on('message', (data) => console.log('Child received:', data));

process.send({ child: 'hello' });
