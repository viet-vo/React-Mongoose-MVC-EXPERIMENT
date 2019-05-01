const router = require("express").Router();
const testController = require("../../controllers/testController");

router
  .route("/")
  .get(testController.findAll)
  .post(testController.seed);

module.exports = router;
