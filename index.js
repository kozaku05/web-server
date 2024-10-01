const http = require('http');
const fs = require('fs');

const port = 80;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    if(req.method === "GET"){
        if(req.url.endsWith("/")) req.url += "index.html";
        fs.readFile(`./web-page${req.url}`, (err, data) => {
            if(err){
                res.writeHead(404,{"Content-type": "text/html"});
                res.end("<h1>404 Not Found</h1>");
            }else{
                res.writeHead(200);
                res.end(data);
            };
        });
    }
});

server.listen(port, () => {
    console.log('Server runnning at port:' + port);//サーバー起動時に表示
});