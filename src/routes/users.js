var express = require('express');
var router = express.Router();

const usersController = require("../controller/users.controller")
/* GET users listing. */
router.get('/', usersController.get)
router.get('/:userId', usersController.get)

  
//   (function(req, res, next) {
//   res.send('respond widaaath a resource');
// });

module.exports = router;
