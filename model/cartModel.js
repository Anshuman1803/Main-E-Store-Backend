const mongoose = require("mongoose");
const cartModel = mongoose.Schema({
    "userEmail" : {
        type : String,
        required : true
    },
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
        type: Object,
        required: true,
    },

})
const cartCollection = mongoose.model("cart", cartModel);
module.exports = { cartCollection };