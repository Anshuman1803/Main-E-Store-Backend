const route = require("express").Router();

const { fetchData } = require("../controller/getAllData");


route.get("/product", fetchData);


module.exports = route