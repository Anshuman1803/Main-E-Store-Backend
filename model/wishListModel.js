const mongoose = require("mongoose");
const wishlistModel = mongoose.Schema({
    "userEmail" : {
        type : String,
        required : true
    },
    "id": {
        type: Number,
        required: true,
    },

})
const wishListCollection = mongoose.model("whishlist", wishlistModel);
module.exports = { wishListCollection };