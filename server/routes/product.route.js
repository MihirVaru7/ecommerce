
/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const productController = require("../controllers/product.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new product
router.post(
  "/add-product",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  productController.addProduct
);

// get all products
router.get("/list-products", productController.getProducts);

// update product
router.patch(
  "/update-product/:id",
  upload.fields([
    { name: "thumbnail", maxCount: 1 },
    { name: "gallery", maxCount: 5 },
  ]),
  productController.updateProduct
);

// get a single product
router.get("/get-product/:id", productController.getProduct);

// filtered products
router.post("/filtered-products", productController.getFilteredProducts);

module.exports = router;
