const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;
const path = require('path');

const server = http.createServer((req, res) => {
  res.end('Hello world')
})

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})