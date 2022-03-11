// const cluster = require('cluster');
// const os = require('os');
const express = require('express');
const app = express();

const delay = function (duration) {
  const startTime = Date.now();
  while (Date.now() - startTime < duration) {
    // Event loop is blocked...
  }
};

app.get('/', (req, res) => {
  // JSON.stringify({}) => "{}"
  // JSON.parse("{}") => {}
  // [5,1,3,4,2].sort()

  res.send(`Performance example ${process.pid}`);
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send(`Ding ding ding! ${process.pid}`);
});

// console.log('Running server.js');
// if (cluster.isMaster) {
//   console.log('Master process has been started!');

//   const numberOfWorkers = os.cpus().length;
//   console.log(numberOfWorkers);

//   for (let i = 0; i < numberOfWorkers; i++) {
//     cluster.fork();
//   }
// } else {
//   console.log('Worker process has been started!');

//   app.listen(3000, (req, res) => {
//     // console.log('Server listening on port 3000');
//   });
// }

console.log('Running server.js');
console.log('Worker process has been started!');
app.listen(3000);
