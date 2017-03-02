var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(request,response){
  var pathname = url.parse(request.url).pathname;
  console.log('path %s',pathname);

  fs.readFile(pathname.substr(1),function(err,data){
    if(err){
      console.log(err);
      response.writeHead(404,{'Content-type': 'text/html'});
    }else {
      response.writeHead(200,{'Content-type': 'text/html'});
      response.write(data.toString());
    }
    response.end();
  });
}).listen(8081);

console.log(server.address());
