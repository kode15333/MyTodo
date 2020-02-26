var express = require("express");
var router = express.Router();
const { User } = require("../models/index");
const crypto = require("crypto");
/* GET users listing. */
router.post("/", async (req, res, next) => {   
    let {userid, userpw, nickname} = req.body;
    userpw = crypto.createHash('sha512').update(userpw).digest("base64")

    try {
        const data = await User.create({
            userid: userid,
            userpw: userpw,
            nickname: nickname
        });
        res.json({singUpState : true}); // 로그인으로 보내기
    } catch (error) {
        res.json({singUpState : false}); // 로그인으로 보내기
    }
    
});

router.post("/join", async (req, res, next) => {
    let {userid, userpw} = req.body;
    userpw = crypto.createHash('sha512').update(userpw).digest("base64")
    try {
        const data = await User.findOne({
            where: {
                userid: userid,
                userpw: userpw
            }
        });
        if (data) {
            req.session.userid = data.userid;
            res.json({ loginState: true, nickname:data.nickname }); // 원래 페이지로 보내기
        } else {
            res.json({ loginState: false }); // 로그인 페이지로 보내기
        }
    } catch (error) {
        console.log('로그인 실패')
    }
});

router.patch("/", async (req, res, next) => {
    if (req.session.userid) {
        const data = await User.update(
            {
                nickname: req.body.nickname
            },
            {
                where: {
                    userid: req.session.userid
                }
            }
        );
        res.json(data); // 원래 페이지로 보내기
    } else {
        res.json("로그인창");
    }
});

router.get("/", async (req, res, next) => {
    if (req.session.userid) {
        req.session.destroy(() => {
            res.json({ logoutState: true }); // 루트 폴더로 보내기
        });
    } else {
        res.json({ logoutState: false });
    }
});

module.exports = router;
