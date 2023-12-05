const route = require("express").Router();
const { productCollection } = require("../model/productModel");



route.get("/product", async (request,response)=>{
    let items = await productCollection.find();
    return response.send(items);
});


module.exports = route