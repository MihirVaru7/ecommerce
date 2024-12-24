

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const categoryController = require("../controllers/category.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new category
router.post(
  "/add-category",
  upload.single("thumbnail"),
  categoryController.addCategory
);

// get all categories
router.get("/list-categories", categoryController.getCategories);

// update category
router.patch(
  "/update-category/:id",
  upload.single("thumbnail"),
  categoryController.updateCategory
);

// get a category
router.get("/get-category/:id", categoryController.getCategory);

module.exports = router;
