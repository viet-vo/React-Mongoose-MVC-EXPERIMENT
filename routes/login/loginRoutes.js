const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
    .post(loginController.checkUserPass);

module.exports = router;