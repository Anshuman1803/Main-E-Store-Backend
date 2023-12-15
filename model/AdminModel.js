const mongoose = require("mongoose");
const adminModel = mongoose.Schema({
    "userName": {
        type: String,
        required: true
    },
    "userEmail": {
        type: String,
        required: true
    },
    "userPassword": {
        type: String,
        required: true
    },
});
const adminCollection = mongoose.model("Admin", adminModel);

module.exports = adminCollection;