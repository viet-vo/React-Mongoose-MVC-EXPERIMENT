const router = require("express").Router();
const userRoutes = require("./userData");

router.use("/user", userRoutes);

module.exports = router;