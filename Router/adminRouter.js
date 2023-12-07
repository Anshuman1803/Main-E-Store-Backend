const route = require("express").Router();
const { addnewProduct } = require("../controller/AddNewProduct");
const { adminLogin } = require("../controller/AdminLogin")
const { deleteProduct } = require("../controller/DeleteProduct")



route.post("/login", adminLogin)
route.post("/add-product", addnewProduct)
route.post("/deleteproduct/:id", deleteProduct)

module.exports = route