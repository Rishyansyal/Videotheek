var express = require('express');
var router = express.Router();
const {authenticateToken, authorizeRole} = require("../middleware/auth.middelware");
const usersController = require("../controller/users.controller")
router.use(authenticateToken);
/* GET users listing. */
router.get('/', authorizeRole(['staff']), usersController.get);
router.get("/:userId/details", authorizeRole(['staff']), usersController.get);
router.get("/:userId/edit", authorizeRole(['staff']), usersController.update);
router.post("/:userId/edit", authorizeRole(['staff']), usersController.update);
router.delete('/:userId/delete',usersController.delete)



module.exports = router;
