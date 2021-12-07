const productDetailService = require('./productDetailService')
exports.list = async (req, res) => {
    const books = await productDetailService.list();
    res.render('productDetail', {books});
}