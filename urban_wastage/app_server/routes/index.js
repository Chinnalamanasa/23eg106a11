var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Urban_Wastage' });
});

router.get('/abt', function(req, res, next) {
  res.render('index', { title: 'Urban_Wastage About' });
});

router.get('/cnt', function(req, res, next) {
  res.render('index', { title: 'urban_wastage contact' });
});

router.get('/loc', function(req, res, next) {
  res.render('index', { title: 'urban_wastage locality' });
});
module.exports = router;
