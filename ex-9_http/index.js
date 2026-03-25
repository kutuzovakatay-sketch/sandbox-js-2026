import {createServer} from 'node:http';

const server = createServer((req,res) =>{
    console.log('request detected', 'method:', req.method, 'url:', req.url);
    
    // console.log('req.headers', req.headers);
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'My-Custom-Header-89': 'my-custom-header-value'
    });

    res.end(`
        <b>Hello from node.js server</b>
        <form action = "/" method = "POST">
        <span>Enter your name</span>
        <input type = "text" name = "username">
        <button>Send</button>
        </form>
    `);
} );

server.listen(3000);