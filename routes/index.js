import { version } from '../package.json';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: `Node.js Express App in Docker ${version}` });
});

module.exports = router;
