var express = require('express');
var router = express.Router();
const ProductController = require('./productListController')
/* GET home page. */
router.get('/', ProductController.list)

module.exports = router;