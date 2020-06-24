var express = require('express');
var WebClientDataController = require ('../controllers/WebClientData')
var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.post('/',WebClientDataController.store)

module.exports = router;
