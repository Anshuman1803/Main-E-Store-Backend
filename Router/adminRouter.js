const route = require("express").Router();
const  {adminLogin} =require("../controller/AdminLogin")



route.post("/login", adminLogin)

module.exports = route