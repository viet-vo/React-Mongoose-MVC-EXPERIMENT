const router = require("express").Router();
const loginController = require("../../controllers/loginController");

router.route("/")
    .get(loginController.findAll);
// router.route("/:id")
//     .get(loginController.checkUserPass);

module.exports = router;