const route = require("express").Router();
const { userLogin } = require("../controller/userLogin");
const {userRegister} = require("../controller/userRegister")



route.post("/register", userRegister)
route.post("/login", userLogin)
module.exports = route