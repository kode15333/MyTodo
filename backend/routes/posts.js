var express = require('express');
var router = express.Router();
const {Post} = require("../models");

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('come in')
  res.json('respond with a resource post');
});

module.exports = router;
