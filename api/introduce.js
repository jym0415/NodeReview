var express = require('express');
var router = express.Router();

//sql 접속문
var mysql = require('mysql')
var dbconfig = require('../db/config.js')
    //dbconfig는 실행문이라기 보다 정보만 있는 모듈이라서 뒤에 .js라는 확장자를 넣어두어서 보기쉽게 해둠
var connection = mysql.createConnection(dbconfig)


router.get('/',(req,res) => {

    connection.query(
        'SELECT * FROM reactinterview.interview;',
        (error, result)=> {
            if(error) throw error;
            res.send(result)

        }
    )
})

module.exports = router;