const router = require("express").Router();
const testController = require("../../controllers/testController");

router.route("/")
    .get(testController.findAll)
    .post(testController.create);

router.route("/:id")
    .get(testController.findById)
    .put(testController.update)
    .delete(testController.remove);

module.exports = router;