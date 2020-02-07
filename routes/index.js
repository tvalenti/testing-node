const pkgjson = require('../package.json');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Node.js Express App in Docker ${pkgjson.version}` });
});

module.exports = router;
