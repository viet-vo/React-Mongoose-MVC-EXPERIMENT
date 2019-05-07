const router = require("express").Router();
const authController = require("../../controllers/loginController");

router.route("/")
    .post(authController.checkUserPass);

module.exports = router;