const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
    // .get(res.send("route works"))
    .post(loginController.checkUserPass);

module.exports = router;