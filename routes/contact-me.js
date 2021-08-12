var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/contact-me', function(req, res, next) {
  res.send('contact me');
});

module.exports = router;
