var express = require("express");
var router = express.Router();
const { Board } = require("../models");

/* GET users listing. */

router.get("/", async (req, res, next) => {
    if (req.session.userid) {
        const data = await Board.findAll({
            where: {
                userid: req.session.userid
            },
            order: [["createdAt", "desc"]],
            raw: true
        });
        res.json(data);
    } else {
        res.json("로그인창");
    }
});
router.get('/:postid', async(req, res, next)=>{
    if(req.session.userid){
        const data = await Board.findOne({
            where : {
                postid : req.params.postid
            }
        })
        res.json(data)
    }else{
        res.json('로그인창')
    }
})
router.post("/", async (req, res, next) => {
    if (req.session.userid) {
        const { title, content, done } = req.body;
        const data = await Board.create({
            userid: req.session.userid,
            title: title,
            content: content,
            done: done
        });
        res.json(data);
    } else {
        res.json("로그인창");
    }
});
router.patch("/:postid", async (req, res, next) => {
    if (req.session.userid) {
        const { title, content, done } = req.body;
        const data = await Board.update(
            {
                title: title,
                content: content,
                done: done
            },
            {
                where: {
                    postid: req.params.postid
                }
            }
        );
        res.json(data);
    } else {
        res.json("로그인창");
    }
});

router.delete("/:postid", async (req, res, next) => {
    if (req.session.userid) {
        const data = await Board.destroy({
            where: {
                postid: req.params.postid
            }
        });
        res.json(data);
    } else {
        res.json("로그인창");
    }
});
module.exports = router;
