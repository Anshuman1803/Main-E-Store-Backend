const mongoose = require("mongoose");
const itemModel = mongoose.Schema({
    "id": {
        type: Number,
        required: true,
    },
    "title": {
        type: String,
        required: true,
    },
    "description": {
        type: String,
        required: true,
    },
    "Aprice": {
        type: Number,
        required: true,
    },
    "Dprice": {
        type: Number,
        required: true,
    },
    "discountPercentage": {
        type: Number,
        required: true,
    },
    "rating": {
        type: String,
        required: true,
    },
    "brand": {
        type: String,
        required: true,
    },
    "category": {
        type: String,
        required: true,
    },
    "images": {
        type: String,
        required: true,
    },
})
const productCollection = mongoose.model("items", itemModel);
module.exports = { productCollection };