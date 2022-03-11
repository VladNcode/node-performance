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

  res.send('Performance example');
});

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Ding ding ding!');
});

app.listen(3000, (req, res) => {
  console.log('Server listening on port 3000');
});
