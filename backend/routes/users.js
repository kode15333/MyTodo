var express = require('express');
var router = express.Router();
const {User} = require("../models/index");

/* GET users listing. */
router.get('/', async function(req, res, next) {
  console.log('come in')
  let data;

  data = await User.findOne({
    where: {
      usernum: 1
    },
    raw: true
  });

  res.json(data)
});

module.exports = router;
