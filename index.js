

const fs=require('fs')
const http=require('http');
const port=3000;
let page = fs.readFileSync('index.html', 'utf8');

http.createServer(function(req,res){
  if(req.url==='/'){
    res.write('Hello world');
        res.end();
  }else if(req.url==='/contact'){
    
        res.end(page);
}else if(req.url==='/about'){
 console.log('вы запросили страницу localhost:3000/about')
      res.end();
}  else{
  res.write('неправильный вариант ввода');
        res.end();
}
     }).listen(port,function(){
    console.log('сервер загрузился port= '+port);
  })
  