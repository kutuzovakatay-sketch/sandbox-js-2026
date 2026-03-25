import {createServer} from 'node:http';

const server = createServer((req,res) =>{
    console.log('req.headers', req.headers);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'My-Custom-Header-89': 'my-custom-header-value'
    });

    res.end("<b>Hello from node.js server</b>");
} );

server.listen(3000);