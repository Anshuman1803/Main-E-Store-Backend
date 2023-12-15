const route = require("express").Router();
const { addnewProduct } = require("../controller/AddNewProduct");
const { adminLogin } = require("../controller/AdminLogin")
const { deleteProduct } = require("../controller/DeleteProduct")
const { adminPasswordUpdate } = require("../controller/PasswordUpdateCtrl")
const { getAllUsers } = require("../controller/GetAllUserCtrl")


route.post("/login", adminLogin)
route.post("/update-passoword", adminPasswordUpdate)
route.post("/add-product", addnewProduct)
route.post("/deleteproduct/:id", deleteProduct)
route.get("/allUsers", getAllUsers)

module.exports = route