const { productCollection } = require("../model/productModel");

const addnewProduct = async (request, response) => {
    const newProduct = request.body
    const mongoResponse = await productCollection.create(newProduct);
    return response.send(mongoResponse)
}

module.exports = { addnewProduct }