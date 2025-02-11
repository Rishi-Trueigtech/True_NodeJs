//HTTP

//Node.js has a built-in module called HTTP, 
// which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
//Use the createServer() method to create an HTTP server:

const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Hello from the server');
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('listening to request on port 3000');
});