const { productCollection } = require("../model/productModel");
const deleteProduct = async (request, response) => {
    const currentID = request.params.id
   const mongooseResponse = await productCollection.findOneAndDelete({ "id": currentID });
   return response.send(mongooseResponse)
}

module.exports = { deleteProduct }