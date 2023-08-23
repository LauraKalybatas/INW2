const {createServer} = require('http')

let server = createServer((request,response) =>{
    response.writeHead(200,{"Constant-Type":"text/html"});
    response.write(`
    <h1>Hello Woe 2</h1>
    <p>Pagina html usando node.js</p>
    `)
    response.end();
})

const port = 8000;
server.listen(port,()=>{
    console.log(`usando a porta ${port} na uml http://localhost:${port}/`)
});