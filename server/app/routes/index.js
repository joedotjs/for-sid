'use strict';
var router = require('express').Router();
module.exports = router;

var fs = require('fs');

router.post('/test', function (req, res) {
    var imageStringBase64 = req.body.image.split(',')[1];
    var imageFile = new Buffer(imageStringBase64, 'base64');
    console.log(imageFile);
    fs.writeFile('./testing.gif', imageFile, function (err) {
        if (err) console.error(err);
        res.sendStatus(200);
    })
});

router.use('/tutorial', require('./tutorial'));
router.use('/members', require('./members'));

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});