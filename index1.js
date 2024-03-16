var http = require("http");
var Uc= require("uppercase");

http.createServer((req, res)=>{
    res.writeHead(200,{'Contetn-Type':'text/html'});
    res.write(Uc("Hello we are Cubrom students"));
    res.write(Uc("Hello we are Web devloper"));
    res.end();
}).listen(8000);