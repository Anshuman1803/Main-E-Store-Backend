const mongoose = require("mongoose");
const itemModel = mongoose.Schema({
    "id": {
        type: Number,
        required: true,
    }
})
const productCollection = mongoose.model("items", itemModel);
module.exports = { productCollection };