var express = require('express');
var router = express.Router();
const {User} = require("../models/index");
const crypto = require('crypto');
/* GET users listing. */
router.post('/', async (req, res, next) => {
  // const {userid, userpw, nickname} = req.body;
  // userpw = crypto.createHash('sha512').update(userpw).digest("base64")

  const data = await User.create({
    userid : userid,
    userpw : userpw,
    nickname : nickname
  });
  res.json(data) // 로그인으로 보내기
});

router.post('/join', async (req,res,next) => {
  // const {userid, userpw} = req.body;
  // userpw = crypto.createHash('sha512').update(userpw).digest("base64")
  const data = await User.findOne({
    where : {
      userid : userid,
      userpw : userpw
    }
  });
  if(data){
    req.session.userid = data.userid
    res.json(data) // 원래 페이지로 보내기
  }else{
    res.json({state: '실패'}) // 로그인 페이지로 보내기
  }
  console.log(req.session)
})

router.patch('/', async(req, res, next)=>{
  const data = await User.update(
    {
      nickname : req.body.nickname
    },{
      where : {
        userid :  req.session.userid
      }
  })
})

router.get('/', async (req, res, next) => {
  req.session.destroy(()=>{
    res.redirect('/') // 루트 폴더로 보내기
  })
})


module.exports = router;
