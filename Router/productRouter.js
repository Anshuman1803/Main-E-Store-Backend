const route = require("express").Router();
const { productCollection } = require("../model/productModel");
const { wishListCollection } = require("../model/wishListModel")


route.get("/product", async (request, response) => {
    let items = await productCollection.find();
    return response.send(items);
});

route.get("/product/:category", async (request, response) => {
    const requestCategory = request.params.category;
    const currentData = await productCollection.find({ category: { $eq: requestCategory } });
    response.send(currentData)
});

route.get("/products/:id", async (request, response) => {
    const productID = request.params.id;
    const singleProduct = await productCollection.find({ id: { $eq: productID } });
    response.send(singleProduct);
});

route.post('/addtowishlist', async (request, response) => {
    let tempItem = request.body
    const mongooseRes = await wishListCollection.create(tempItem);
    return response.send(mongooseRes)
});

route.post("/removetowishlist", async (request, response)=>{
    let tempItem = request.body
    const mongooseRes = await wishListCollection.findOneAndDelete({ $and: [{ id: {$eq : tempItem.id} }, { userEmail: { $eq: tempItem.userEmail} }] });
    return response.send(mongooseRes)
})



module.exports = route