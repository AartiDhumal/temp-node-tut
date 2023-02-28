
const http =require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        return res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        return res.end('Here is our short history')
    }
    res.end(`<h1>OOPS!</h1>
    <p>We cant seem to find the page youa re looking for</p>
    <a href="/">Back home</a>`)
})

server.listen(5001)