const {models} = require('../../models')
exports.list = (page = 0, itemPerPage = 4) => {
    return models.books.findAll({offset: page*itemPerPage, limit: itemPerPage, raw: true});
}