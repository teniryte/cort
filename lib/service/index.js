const http = require('http');

let server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('CORT_SERVICE');
});

server.listen(18001);
