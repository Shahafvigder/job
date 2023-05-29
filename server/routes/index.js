const express = require("express");
const router = express.Router();
const photosRoutes = require("./photos.routes");

router.use("/photos", photosRoutes);

module.exports = router;
