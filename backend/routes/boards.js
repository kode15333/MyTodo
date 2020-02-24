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

router.post("/", async (req, res, next) => {
  const {title, content, state} = req.body;
    if (!req.session.userid) {
        const data = await Board.create({
            userid: req.session.userid,
            title: title,
            content: content,
            state: state
        });
        res.json(data);
    } else {
        res.json("로그인창");
    }
});
router.patch("/:postid" , async (req, res, next)=>{
  const {title, content, state} = req.body;
  const data = await Board.update({
    title: title,
    content: content,
    state: state
  },{
    where : {
      postnum :  req.params.postid
    }
  })
  res.json(data)
})

router.delete("/:postid", async (req, res, next)=>{
  const data = await Board.destroy({
    where :{
      postnum :  req.params.postid
    }
  })
  res.json(data)
})
module.exports = router;
