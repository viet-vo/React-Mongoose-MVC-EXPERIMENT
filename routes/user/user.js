const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/")
    .get(userController.findAll)
    .post(userController.create);

// router

module.exports = router;