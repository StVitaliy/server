const fs=require('fs')
const http=require('http');
const port=3000;

let page = fs.readFileSync('index.html', 'utf8');
http.createServer(function(req,res){
  if(req.url==='/'){
   res.writeHead(200,{'Content-Type':'text/plain'});
        res.end('Hello world');
  }else if(req.url==='/contact'){
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end(page);

}else if(req.url==='/about'){
   console.log('вы запросили страницу localhost:3000/about')
 res.end()
}else{
  res.writeHead(200,{'Content-Type':'text/plain; charset=utf-8'});
  res.end('вы ввели не правильный адрес http/')
}
     }).listen(port,function(){
    console.log('сервер загрузился port= '+port);
  })
  
