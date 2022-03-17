var express = require('express');
var app = express();

var postsend = require('./api/post')
var getsend = require('./api/get')
var sqlreqres = require('./api/introduce')



app.use('/post',postsend);
app.use('/get',getsend);
app.use('/introduce', sqlreqres)

app.set('port', 8080)
app.get('/',(req,res) => {
    res.send('/루트요청')
})
app.listen(app.get('port'),()=>{
    console.log( '콘솔에서시간확인');
})
