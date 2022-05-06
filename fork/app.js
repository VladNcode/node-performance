const { fork } = require('child_process');

const forkProcess = fork('fork.js');

forkProcess.on('message', msg => {
	console.log(`Message recieved: ${msg}`);
});

forkProcess.on('close', code => {
	console.log(`Exited with code: ${code}`);
});

forkProcess.send('Ping');
forkProcess.send('disconnect');
