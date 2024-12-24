

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const brandController = require("../controllers/brand.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new brand
router.post("/add-brand", upload.single("logo"), brandController.addBrand);

// get all brands
router.get("/list-brands", brandController.getBrands);

// update brand
router.patch(
  "/update-brand/:id",
  upload.single("logo"),
  brandController.updateBrand
);

// get a brand
router.get("/get-brand/:id", brandController.getBrand);

module.exports = router;
