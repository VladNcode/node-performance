const { spawn } = require('child_process');

const childProcess = spawn('lss');

childProcess.stdout.on('data', data => {
	console.log(`Stdout: ${data}`);
});

childProcess.stderr.on('data', err => {
	console.log(`Stderr: ${err}`);
});

childProcess.on('exit', code => {
	console.log(`Exit code: ${code}`);
});
