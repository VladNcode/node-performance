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

app.listen(3000, () => {
	console.log(`Worker ${process.pid} started`);
});
