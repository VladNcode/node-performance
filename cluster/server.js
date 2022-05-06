const cluster = require('cluster');
const { cpus } = require('os');
const express = require('express');
const app = express();

const delay = function (duration) {
	const startTime = Date.now();
	while (Date.now() - startTime < duration) {
		// Event loop is blocked...
	}
};

app.get('/', (req, res) => {
	res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
	delay(4000);
	res.send(`Ding ding ding! ${process.pid}`);
});

const numCPUs = cpus().length;

if (cluster.isPrimary) {
	console.log(`Primary ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	app.listen(3000, () => {
		console.log(`Worker ${process.pid} started`);
	});
}
