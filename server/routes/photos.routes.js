const express = require("express");
const router = express.Router();
const photosControler = require("../controllers/photos.controller");

// return all characters
router.route("/all").get(photosControler.getAllphotosController);

module.exports = router;
