

/* external import */
const express = require("express");

/* middleware imports */
const upload = require("../middleware/upload.middleware");
const verify = require("../middleware/verify.middleware");

/* internal import */
const userController = require("../controllers/user.controller");

/* router level connection */
const router = express.Router();

/* router methods integration */

// sign up an user
router.post("/signup", upload.single("avatar"), userController.signUp);

// sign in an user
router.post("/signin", userController.signIn);

// reset user password
router.patch("/forgot-password", userController.forgotPassword);

// login persistance
router.get("/me", verify, userController.persistLogin);

// get all users
router.get("/list-users", userController.getUsers);

// update user
router.patch("/update-user/:id", userController.updateUser);

/* export user router */
module.exports = router;
