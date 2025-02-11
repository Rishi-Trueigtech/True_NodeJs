const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, this is a GET response!');
        console.log('new request created');
    } else if (req.method === 'POST') {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('POST request received and resource created.Created by Rishi');
        console.log('New Post method');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
