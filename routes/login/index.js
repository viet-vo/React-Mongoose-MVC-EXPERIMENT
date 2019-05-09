const router = require("express").Router();
const loginRoutes = require("./loginRoutes");

router.use("/check", loginRoutes);

module.exports = router;