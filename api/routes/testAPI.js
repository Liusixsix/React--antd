var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send("返回的数据");
});

module.exports = router;