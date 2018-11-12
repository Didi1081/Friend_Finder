var express = require('express');
var router = express.Router();




router.post('/friend', function(req, res) {
    console.log("in post friend")
    console.log(req.body);
    res.send(req.body)
});



module.exports = router;