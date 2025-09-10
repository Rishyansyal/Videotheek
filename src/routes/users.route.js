var express = require('express');
var router = express.Router();
const authenticateToken = require("../middleware/auth.middelware");
const usersController = require("../controller/users.controller")
router.use(authenticateToken);
/* GET users listing. */
router.get('/', usersController.get)
router.get("/:userId/details",usersController.get)
router.get("/:userId/edit",usersController.update)
router.post("/:userId/edit",usersController.update)
router.delete('/:userId',usersController.delete)



module.exports = router;
