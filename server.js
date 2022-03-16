var express = require('express');

//sql 접속문
var mysql = require('mysql')
var dbconfig = require('./db/config.js')
    //dbconfig는 실행문이라기 보다 정보만 있는 모듈이라서 뒤에 .js라는 확장자를 넣어두어서 보기쉽게 해둠
var connection = mysql.createConnection(dbconfig)


var app = express();
var time = new Date();

var requrljs =  require('./api/get.js')

app.set('port', 8080)
app.get('/',(req,res) => {
    res.send('/루트요청')
})

app.get('/introduce',(req,res) => {

    connection.query(
        'SELECT * FROM reactinterview.interview;',
        (error, result)=> {
            if(error) throw error;
            res.send(result)

        }
    )
})



app.get('/dd',(req,res) =>{
    res.send('/dd나와라')
})

app.use('./api/get.js',requrljs);
app.use('./api/post.js',requrljs);

app.listen(app.get('port'),()=>{
    console.log(time + '콘솔에서시간확인');
})
