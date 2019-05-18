const router = require("express").Router();
const authCheck = require("../../utils/middleware/jwtCheck");

router.route("/", authCheck, function(req, res) {
    res.sendStatus(200);
});

module.exports = router;