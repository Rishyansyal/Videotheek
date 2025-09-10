const express = require("express");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/login", authController.renderLogin);
router.post("/login", authController.login);

module.exports = router;

