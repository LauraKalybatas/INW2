const http = require('HTTP')

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello, Node.js Server')
});

const port = 1000;
server.listen(port, () =>{
    console.log('Server sendo executado em http://localhost:${port}');
})