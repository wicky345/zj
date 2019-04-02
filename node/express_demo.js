var express = require('express');
var app = express();
var bodyParser = require('body-parser');
 var connection=require('./sql.js');
// var crawler=require('./crawlerFile/crawler.js');
// var crawler2=require('./crawlerFile/crawler2.js');
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('static'))
app.use(express.static('build'))
app.use(express.static('dist'))

app.get('/',function (req,res) {
   res.end('index.html');
})

app.get('/api/news',function (req,res) {
  var selectSql = 'select ID,title,summary,n_like,postTime from news '
 
  connection.query(selectSql ,"",function (err, result) {
    if(err){
      console.log(err.message);
      return;
    }
    res.end(JSON.stringify(result));
  });
})


app.get('/api/test',function (req,res) {
  var selectSql = 'select * from student '
 
  connection.query(selectSql ,"",function (err, result) {
    if(err){
      console.log(err.message);
      return;
    }
    res.end(JSON.stringify(result));
  });
})

app.get('/api/business',function (req,res) {
  var selectSql = 'select ID,src,name,summary from business '
 
  connection.query(selectSql ,"",function (err, result) {
    if(err){
      console.log(err.message);
      return;
    }
    res.end(JSON.stringify(result));
  });
})

app.get('/api/employ',function (req,res) {
  var selectSql = 'select * from employ '
 
  connection.query(selectSql ,"",function (err, result) {
    if(err){
      console.log(err.message);
      return;
    }
    res.end(JSON.stringify(result));
  });
})

var server = app.listen(8088, function () {
  var host = server.address().address;
   var port = server.address().port;
  console.log('hello world ! host:'+host+' port:'+port);
})


