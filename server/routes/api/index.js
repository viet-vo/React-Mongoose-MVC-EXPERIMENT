const router = require("express").Router();
const testRoutes = require("./testData");

router.use("/testData", testRoutes);

module.exports = router;