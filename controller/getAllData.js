const { productCollection } = require("../model/productModel");

const fetchData = async (request, response) => {
    let items = await productCollection.find();
    return response.send(items);
}

module.exports = { fetchData }