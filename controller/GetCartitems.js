const { cartCollection } = require("../model/cartModel");
const getCartItems = async (request, response) => {
    const mongooseResponse = await cartCollection.find({})
    return response.send(mongooseResponse)
}

module.exports = { getCartItems }