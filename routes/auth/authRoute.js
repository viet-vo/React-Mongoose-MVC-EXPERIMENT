const router = require("express").Router();
const authController = require("../../controllers/loginController");

router.route("/")
    .get(authController.findAll)
    .post(authController.checkUserPass);

module.exports = router;