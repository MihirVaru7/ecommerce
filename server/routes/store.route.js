
/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");

/* internal import */
const storeController = require("../controllers/store.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// add new store
router.post("/add-store", upload.single("thumbnail"), storeController.addStore);

// get all stores
router.get("/list-stores", storeController.getStores);

// update store
router.patch(
  "/update-store/:id",
  upload.single("thumbnail"),
  storeController.updateStore
);

// get a store
router.get("/get-store/:id", storeController.getStore);

module.exports = router;
