var express = require('express')
var router = express.Router()

router.post('/', (req, res ,next) => {
    res.send({
        'postdbtitle' : 'post전송방식은 이렇게 xml혹은 json',
        'postdbtitle2' : '내용을 좀더 넣어봄',
        'key' : 'value'
    });

})

module.exports = router;