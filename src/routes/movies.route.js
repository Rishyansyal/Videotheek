var express = require("express");
var router = express.Router();
const moviesController = require("../controller/movies.controller");
const {authenticateToken, authorizeRole} = require("../middleware/auth.middelware");
router.get("/",moviesController.get);
module.exports = router;