const router = require("express").Router();
const authRoutes = require("./authRoute");

router.use("/check", authRoutes);

module.exports = router;