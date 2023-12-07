const mongoose = require("mongoose");
const adminModel = mongoose.Schema({
    "adminName": {
        type: String,
        required: true
    },
    "adminEmail": {
        type: String,
        required: true
    },
    "adminPassword": {
        type: String,
        required: true
    },
});
const adminCollection = mongoose.model("Admin", adminModel);

module.exports = adminCollection;