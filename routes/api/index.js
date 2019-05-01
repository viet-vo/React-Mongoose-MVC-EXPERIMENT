const router = require("express").Router();
const testRoutes = require("./testData");

const testRoutes2 = require("./testData2");

router.use("/testData", testRoutes);

router.use("/testData2", testRoutes2);

module.exports = router;