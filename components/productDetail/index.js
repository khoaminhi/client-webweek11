var express = require('express');
var router = express.Router();
const ProductController = require('./productDetailController')
/* GET home page. */
router.get('/', ProductController.list)

module.exports = router;