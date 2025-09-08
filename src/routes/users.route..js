var express = require('express');
var router = express.Router();

const usersController = require("../controller/users.controller")
/* GET users listing. */
router.get('/', usersController.get)
router.get('/:userId', usersController.get)
router.get("/:userId/details",usersController.get)
router.delete('/:userId',usersController.delete)
router.post('/', usersController.post);
router.put('/:userId', usersController.put);



module.exports = router;
