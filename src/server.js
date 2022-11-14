const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const database = require('./database.js');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let srvr;

function initialize() {
  return new Promise((res, rej) => {
    //const app = express();
    srvr = http.createServer(app);

    app.get ('/', (req, res) => {
      res.end('jon was here');
      alert('success');
    });

    srvr.listen(port, err => {
      if (err) {
        reject(err);
        return;
      }
      console.log('WS listening on localhost:${port}');
      resolve();
    })
  })

}
module.exports.initialize = initialize;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));