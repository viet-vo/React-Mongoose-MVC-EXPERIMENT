const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
    .get(loginController.findUserNames);
// router.route("/:id")
//     .get(loginController.checkUserPass);

module.exports = router;