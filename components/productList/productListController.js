const productListService = require('./productListService')
exports.list = async (req, res) => {
    const books = await productListService.list();
    res.render('productList', {books});
}