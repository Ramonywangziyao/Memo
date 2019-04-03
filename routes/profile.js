var express = require('express');
var router = express.Router();
var profileManager = require('../public/js/profileManager.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('person', {
    title: 'profile'
  });
});

module.exports = router;
