var express = require("express");
var router = express.Router();
const { User } = require("../models/index");
const crypto = require("crypto");
/* GET users listing. */
router.post("/", async (req, res, next) => {
    let {userid, userpw, nickname} = req.body;
    userpw = crypto.createHash('sha512').update(userpw).digest("base64")

    const data = await User.create({
        userid: userid,
        userpw: userpw,
        nickname: nickname
    });
    res.json(data); // 로그인으로 보내기
});

router.post("/join", async (req, res, next) => {
    let {userid, userpw} = req.body;
    userpw = crypto.createHash('sha512').update(userpw).digest("base64")
    const data = await User.findOne({
        where: {
            userid: userid,
            userpw: userpw
        }
    });
    if (data) {
        req.session.userid = data.userid;
        console.log('sessiong 생김')
        res.json(data); // 원래 페이지로 보내기
    } else {
        res.json({ state: "실패" }); // 로그인 페이지로 보내기
    }
    console.log(req.session);
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
            console.log('session 해제'); // 루트 폴더로 보내기
        });
    } else {
        res.json("로그인 창");
    }
});

module.exports = router;
