const fs = require('fs')
const http = require('http')
const url = require('url')
const server =http.createServer((req,res)=>{
    console.log(req.url)
    const path =req.url
    if(path === '/profile'){
        res.end('Hi Everyone')
    }else{
        
    res.writeHead(404,{ 
        'Content-type' :  'text/html',
        'My-own-header': 'hello-world'
   
    })
    res.end('<h1>Error Page</h1>')
}
})
server.listen(7000,'127.0.0.1',()=>{
    console.log("Listening at port 7000")
})