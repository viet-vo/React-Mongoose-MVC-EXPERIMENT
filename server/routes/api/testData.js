const router = require("express").Router();
const testController = require()

router.route("/")
    .get(testController.findall)
    .post(testController.create);

router.route("/:id")
    .get(testController.findById)
    .put(testController.update)
    .delete(testController.remove);

module.exports = router;