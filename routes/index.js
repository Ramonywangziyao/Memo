var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express',
    slogan: 'Wish everyone R.I.P'
  });
});

module.exports = router;
