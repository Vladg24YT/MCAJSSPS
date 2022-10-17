const http = require('http');

const host = '127.0.0.1';
const port = '25565';

const proxyServer = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello, Node');
});

proxyServer.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:${port}/');
});